import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';
import authConfig from '../config/auth';
import Logger from './LoggerController';

import { Artistas } from '../models/Artistas';
import { Albuns } from '../models/Albuns';
import { Capas } from '../models/Capas';
import { Users } from '../models/Users';

const config = require('../config/database');

const sequelize = new Sequelize(config);

const salt = bcrypt.genSaltSync(13);

class SessionController {
  async Login(req, res) {
    try {
      Logger.info('Novo Login');
      const { login, senha } = req.body;

      if (login === undefined || senha === undefined) {
        res.json({
          success: false,
          message: 'Campos Invalidos ',
        });
      }

      const User = await Users.findOne({ where: { login } });
      let comparaSenha = false;
      if (User) {
        comparaSenha = bcrypt.compareSync(senha, User.senha);
      } else {
        comparaSenha = false;
      }

      if (User && comparaSenha) {
        const tokenData = {
          login: User.login,
          nome: User.nome,
        };
        const token = jwt.sign(tokenData, authConfig.secret, { expiresIn: authConfig.expiresIn });

        return res.json({
          success: true,
          token,
          user: User,
          message: 'Login Efetuado com Sucesso',
        });
      }

      return res.json({
        success: false,
        message: 'Erro Verifique os Campos!!',
      });
    } catch (error) {
      Logger.error(`Erro ao Realizar Login ${error}`);
      return res.json({
        success: false,
        message: `Erro ao Realizar Login ${error}`,
      });
    }
  }

  async Models(req, res) {
    try {
      await Users.drop();
      await Capas.drop();
      await Albuns.drop();
      await Artistas.drop();

      await Users.sync({ force: true });
      await Artistas.sync({ force: true });
      await Albuns.sync({ force: true });
      await Capas.sync({ force: true });

      const hash = bcrypt.hashSync('admin', salt);

      const userAdmin = await Users.create({
        nome: 'Admin',
        login: 'admin',
        senha: hash,
      });

      if (userAdmin) {
        return res.json({
          success: true,
          message: 'Carga de Tabelas Efetuada',
        });
      }
      return res.json({
        success: false,
        message: 'Erro ao Efetuar Carga de Tabelas',
      });
    } catch (error) {
      return res.json({
        success: false,
        message: `Erro ao Criar Tabelas ${error}`,
      });
    }
  }
}

export default new SessionController();
