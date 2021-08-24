import { Injectable, UploadedFile } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UploadApiResponse, v2 } from 'cloudinary';
import { Model } from 'mongoose';
import { PymeDTO, RedesSocialesDto } from './dto/pyme.dto';
import { PymeModel } from './interfaces/project.interface';
import { verifyValidId, swapArrayElements } from '../utils';
import toStream = require('buffer-to-stream');

@Injectable()
export class PymesService {
  constructor(@InjectModel('Pymes') private pymeModel: Model<PymeModel>) { }

  async addnewPyme(pymeDTO: PymeDTO) {
    const pyme = new this.pymeModel(pymeDTO);
    return await pyme.save();
  }
  async getOnePymeByName(nombre: string): Promise<PymeModel> {
    console.log(nombre);
    const onePyme = await this.pymeModel.findOne({
      nombre,
    });
    console.log(onePyme);
    return onePyme;
  }
  async getAllPymes() {
    const onePyme = await this.pymeModel.find().sort({ verificado: 'desc' });
    return onePyme;
  }

  async addSocialNetworks(
    id: string,
    socialNetworks: RedesSocialesDto,
  ): Promise<boolean> {
    const getPyme = await this.pymeModel.findOne({ _id: id });

    if (verifyValidId(id)) {
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

  async addProfileImage(
    id: string,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<boolean> {
    const getPyme = await this.pymeModel.findOne({ _id: id });
    if (!verifyValidId(id)) {
      return false;
    }
    if (getPyme == null || getPyme == undefined) {
      return false;
    }

    let uploadApiResponse: UploadApiResponse;

    const upload = v2.uploader.upload_stream(
      { folder: 'profiles_images' },
      async (error, result) => {
        if (error) {
          console.log(error);
          return false;
        }
        uploadApiResponse = result;

        try {
          getPyme.profileImage = uploadApiResponse.url;
          console.log(getPyme);
          await getPyme.save();
        } catch (error) {
          console.log(error);
        }
      },
    );

    toStream(file.buffer).pipe(upload);

    return true;
  }
  async changeMainImage(id: string, index: number): Promise<boolean> {

    const currentPyme = await this.pymeModel.findOne({ _id: id });

    if (index >= currentPyme.urlImages.length) {
      return false;
    }

    /* console.log(JSON.stringify(currentPyme.urlImages, null, " ")); */

    try {
      const updated = await this.pymeModel.findByIdAndUpdate(
        { _id: id },
        {
          urlImages: swapArrayElements(currentPyme.urlImages, 0, index),
        },
      );
      console.log(updated);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
