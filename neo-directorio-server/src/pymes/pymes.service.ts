import { Injectable, UploadedFile } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UploadApiResponse, v2 } from 'cloudinary';
import { Model } from 'mongoose';
import { PymeDTO, RedesSocialesDto } from './dto/pyme.dto';
import { PymeModel } from './interfaces/project.interface';
import toStream = require('buffer-to-stream');

@Injectable()
export class PymesService {
  constructor(@InjectModel('Pymes') private pymeModel: Model<PymeModel>) { }

  async addnewPyme(pymeDTO: PymeDTO) {
    const pyme = new this.pymeModel(pymeDTO);
    await pyme.save();
  }
  async getOnePyme(id: string) {
    const onePyme = await this.pymeModel.findOne({ _id: id });
    return onePyme;
  }
  async getAllPymes() {
    const onePyme = await this.pymeModel.find();
    return onePyme;
  }

  async addSocialNetworks(
    id: string,
    socialNetworks: RedesSocialesDto,
  ): Promise<boolean> {
    const getPyme = await this.pymeModel.findOne({ _id: id });

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      if (getPyme) {
        getPyme.redes_sociales.push(socialNetworks);
        await getPyme.save();
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  async addImages(
    id: string,
    @UploadedFile() files: Array<Express.Multer.File>,
  ): Promise<boolean> {
    const getPyme = await this.pymeModel.findOne({ _id: id });

    if (getPyme == null || getPyme == undefined) {
      return false;
    }
    files.forEach((file) => {
      let uploadApiResponse: UploadApiResponse;

      const upload = v2.uploader.upload_stream(
        { folder: 'neo_directorio' },
        async (error, result) => {
          if (error) {
            console.log(error);
            return false;
          }
          uploadApiResponse = result;
          console.log(getPyme);
          console.log(getPyme.urlImages);
          try {
            getPyme.urlImages.push(uploadApiResponse.url);
            await getPyme.save();
          } catch (error) {
            console.log(error);
          }
        },
      );

      toStream(file.buffer).pipe(upload);
    });
    return true;
  }
}
