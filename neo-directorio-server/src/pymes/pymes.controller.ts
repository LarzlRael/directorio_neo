import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { PymesService } from './pymes.service';
import { Response } from 'express';
import { PymeDTO, RedesSocialesDto } from './dto/pyme.dto';
import { Body } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { imageFileFilter } from '../utils';

@Controller('pymes')
export class PymesController {
  constructor(private pymeService: PymesService) { }
  @Get()
  getAllPymesInfo() {
    return this.pymeService.getAllPymes();
  }
  @Post('/newPyme')
  async newPyme(@Body() pymeDTO: PymeDTO) {
    console.log(pymeDTO);
    /* return await this.pymeService.addnewPyme(pymeDTO); */
  }
  @Get('/:id')
  getOne(@Param('id') id) {
    return this.pymeService.getOnePyme(id);
  }

  @Post('/addSocialNetwork/:id')
  async addSocialNetwork(
    @Res() res: Response,
    @Param('id') id,
    @Body() socialNetWork: RedesSocialesDto,
  ) {
    if (await this.pymeService.addSocialNetworks(id, socialNetWork)) {
      res.json({
        ok: true,
        message: 'red social agregada',
      });
    } else {
      res.json({
        ok: false,
        message: 'no se encontro el id',
      });
    }
  }

  @Post('/addedImage/:id')
  @UseInterceptors(
    FilesInterceptor('files', 5, {
      fileFilter: imageFileFilter,
    }),
  )
  async addImages(
    @Param('id') id,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    await this.pymeService.addImages(id, files);
  }
}
