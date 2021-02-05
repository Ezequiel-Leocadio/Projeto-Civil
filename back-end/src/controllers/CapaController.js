import Logger from './LoggerController';

import { Capas } from '../models/Capas';
import { minioClient } from '../config/minio';

class CapaController {
  async Create(req, res) {
    try {
      Logger.info('Inserindo  Capa ');

      const data = await Capas.create({ imagem: req.file.originalname, AlbunId: req.body.AlbunId });
      if (data) {
        // Upload para o MINIO
        await minioClient.putObject('projeto-artista-albuns', req.file.originalname, req.file.buffer);
        const urlCapa = await minioClient.presignedUrl('GET', 'projeto-artista-albuns', req.file.originalname, 5);

        return res.json({
          success: true,
          data: { ...data, imagem: urlCapa },
          message: 'Capa Inserindo  com Sucesso',
        });
      }
      return res.json({
        success: false,
        message: 'Erro ao Inserir Capa',
      });
    } catch (error) {
      Logger.error(`Erro ao Inserir Capa ${error}`);
      return res.json({
        success: false,
        message: `Erro ao Inserir Capa ${error}`,
      });
    }
  }

  async Find(req, res) {
    try {
      Logger.info('Buscando  Album');
      const urlCapa = await minioClient.presignedUrl('GET', 'projeto-artista-albuns', 'oferta-especial.png', 24 * 60 * 60);

      // minioClient.presignedUrl('GET', 'bandas', '', 1000, (err, presignedUrl) => {
      //   if (err) return console.log(err);
      //   console.log(presignedUrl);
      // });
      // const data = await Capas.findByPk(req.params.id);
      return res.json({
        success: true,

        message: `Capas Buscado  com Sucesso ${JSON.stringify(urlCapa)}`,
      });
    } catch (error) {
      Logger.error(`Erro ao Buscar Capas ${error}`);
      return res.json({
        success: false,
        message: `Erro ao Buscar Capas ${error}`,
      });
    }
  }

  async Update(req, res) {
    try {
      Logger.info('Editando Capas');

      const find = await Capas.findByPk(req.params.id);

      if (find) {
        const up = find.update(req.body);
        if (up) {
          return res.json({
            success: true,
            data: up,
            message: 'Capas Editado  com Sucesso',
          });
        }
      }

      return res.json({
        success: false,
        message: 'Erro ao Editar Capas',
      });
    } catch (error) {
      Logger.error(`Erro ao Editar Capas ${error}`);
      return res.json({
        success: false,
        message: `Erro ao Editar Capas ${error}`,
      });
    }
  }
}

export default new CapaController();
