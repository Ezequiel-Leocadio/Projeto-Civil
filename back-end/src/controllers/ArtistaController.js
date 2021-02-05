import { Op } from 'sequelize';
import Logger from './LoggerController';
import { Artistas } from '../models/Artistas';
import { Albuns } from '../models/Albuns';
import { Capas } from '../models/Capas';
import { minioClient } from '../config/minio';

async function UrlImage(e) {
  // const tempo = 24 * 60 * 60;
  const tempo = 5 * 60;
  const urlCapa = await minioClient.presignedUrl('GET', 'projeto-artista-albuns', `${e}`, tempo);
  return urlCapa;
}

class ArtistaController {
  async List(req, res) {
    try {
      Logger.info('Listagem de Artistas e Abuns');
      const {
        nome, sobrenome, banda, capa, order, page,
      } = req.query;

      const offset = page * 10 - 10;
      const limit = page * 10;

      const data = await Artistas.findAll({
        offset,
        limit,
        where: {
          nome: {
            [Op.like]: `%${nome}%`,
          },
          sobrenome: {
            [Op.like]: `%${sobrenome}%`,
          },
          banda: {
            [Op.like]: `%${banda}%`,
          },

        },

        include: [
          {
            model: Albuns,
            attributes: ['descricao'],
            where: {
              descricao: {
                [Op.like]: `%${capa}%`,
              },
            },
            // paranoid: false,
            required: false,
          },
        ],

        order: [
          ['nome', order],
        ],
      });

      if (data.length > 0) {
        return res.json({
          success: true,
          data,
          message: 'Listagem  de Artistas com Sucesso',
        });
      }
      return res.json({
        success: false,
        message: 'Lista --Vazia--',
      });
    } catch (error) {
      Logger.error(`Erro ao Listar Artistas ${error}`);
      return res.json({
        success: false,
        message: `Erro ao Listar Artistas ${error}`,
      });
    }
  }

  async Create(req, res) {
    try {
      Logger.info('Inserindo  Artista');

      const data = await Artistas.create(req.body);
      return res.json({
        success: true,
        data,
        message: 'Artista Inserindo  com Sucesso',
      });
    } catch (error) {
      Logger.error(`Erro ao Inserir Artista ${error}`);
      return res.json({
        success: false,
        message: `Erro ao Inserir Artista ${error}`,
      });
    }
  }

  async Find(req, res) {
    try {
      Logger.info('Buscando  Artista');
      const data = await Artistas.findByPk(req.params.id, {
        include: [
          {
            model: Albuns,
            attributes: ['id', 'descricao'],
            require: false,
            include: [
              {
                model: Capas,
                attributes: ['imagem'],
                require: false,

              },
            ],
          },

        ],
      });

      if (data) {
        const AlbunsF = [];
        let CapasF = [];
        let i = 0;

        for await (const a of data.dataValues.Albuns) {
          CapasF = [];

          let y = 0;
          for await (const c of a.dataValues.Capas) {
            CapasF[y] = {
              ...c.dataValues,
              imagem: `${await UrlImage(c.dataValues.imagem)}`,
            };
            y++;
          }

          AlbunsF[i] = {
            ...a.dataValues,
            Capas: CapasF,
            capa: a.dataValues.Capas.length > 0 ? `${await UrlImage(a.dataValues.Capas[0].dataValues.imagem)}` : '/sem.png',
          };
          i++;
        }

        const d = {
          ...data.dataValues,
          Albuns: AlbunsF,
        };
        return res.json({
          success: true,
          data: d,
          message: 'Artista Buscado  com Sucesso',
        });
      }
      return res.json({
        success: false,
        message: 'Erro ao Buscar Artista',
      });
    } catch (error) {
      Logger.error(`Erro ao Buscar Artista ${error}`);
      return res.json({
        success: false,
        message: `Erro ao Buscar Artista ${error}`,
      });
    }
  }

  async Update(req, res) {
    try {
      Logger.info('Editando Artista');

      const find = await Artistas.findByPk(req.params.id);

      if (find) {
        const up = await find.update(req.body);
        if (up) {
          return res.json({
            success: true,
            data: up,
            message: 'Artista Editado  com Sucesso',
          });
        }
      }

      return res.json({
        success: false,
        message: 'Erro ao Editar Artista',
      });
    } catch (error) {
      Logger.error(`Erro ao Editar Artista ${error}`);
      return res.json({
        success: false,
        message: `Erro ao Editar Artista ${error}`,
      });
    }
  }
}

export default new ArtistaController();
