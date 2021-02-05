import Logger from './LoggerController';
import { Albuns } from '../models/Albuns';
import { Capas } from '../models/Capas';
import { minioClient } from '../config/minio';

async function UrlImage(e) {
  const urlCapa = await minioClient.presignedUrl('GET', 'projeto-artista-albuns', `${e}`, 24 * 60 * 60);
  return urlCapa;
}
class AlbumController {
  async Create(req, res) {
    try {
      Logger.info('Inserindo  Album');

      const data = await Albuns.create(req.body);
      return res.json({
        success: true,
        data: { ...data.dataValues, capa: '/sem.png', Capas: [] },
        message: 'Album Inserindo  com Sucesso',
      });
    } catch (error) {
      Logger.error(`Erro ao Inserir Album ${error}`);
      return res.json({
        success: false,
        message: `Erro ao Inserir Album ${error}`,
      });
    }
  }

  async Find(req, res) {
    try {
      Logger.info('Buscando  Album');

      const data = await Albuns.findByPk(req.params.id, {
        include: [
          {
            model: Capas,
            attributes: ['imagem'],
          },
        ],
      });
      return res.json({
        success: true,
        data,
        message: 'Album Buscado  com Sucesso',
      });
    } catch (error) {
      Logger.error(`Erro ao Buscar Album ${error}`);
      return res.json({
        success: false,
        message: `Erro ao Buscar Album ${error}`,
      });
    }
  }

  async Update(req, res) {
    try {
      Logger.info('Editando Album');

      const find = await Albuns.findByPk(req.params.id, {
        include: [
          {
            model: Capas,
            attributes: ['imagem'],
            require: false,

          },

        ],
      });

      if (find) {
        const up = await find.update(req.body);
        const data = {
          ...up.dataValues,
          capa: find.dataValues.Capas.length > 0 ? `${await UrlImage(find.dataValues.Capas[0].dataValues.imagem)}` : '/sem.png',
          Capas: find.dataValues.Capas,
        };
        if (up) {
          return res.json({
            success: true,
            data,
            message: 'Album Editado  com Sucesso',
          });
        }
      }

      return res.json({
        success: false,
        message: 'Erro ao Editar Album',
      });
    } catch (error) {
      Logger.error(`Erro ao Editar Album ${error}`);
      return res.json({
        success: false,
        message: `Erro ao Editar Album ${error}`,
      });
    }
  }
}

export default new AlbumController();
