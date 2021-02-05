import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader === undefined) {
    return res.json({
      success: false,
      message: 'Erro de Autenticação, \n Faça login Novamente ou Atualize Sua Aplicação ! ',
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.user = {
      id: decoded.id, usuario: decoded.login,
    };
    return next();
  } catch (err) {
    return res.json({
      success: false,
      message: `Erro de Autenticação, Token Invalid ! ${err}`,
    });
  }
};
