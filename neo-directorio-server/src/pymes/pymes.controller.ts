import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PymesService } from './pymes.service';
import { Response } from 'express';
import { PymeDTO, RedesSocialesDto } from './dto/pyme.dto';
import { Body, UploadedFile } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { imageFileFilter } from '../utils';
import { AuthGuard } from '@nestjs/passport';

@Controller('pymes')
export class PymesController {
  constructor(private pymeService: PymesService) { }
  @Get()
  getAllPymesInfo() {
    return this.pymeService.getAllPymes();
  }

  @Get('/:id')
  getOne(@Param('id') id) {
    return this.pymeService.getOnePyme(id);
  }

  @Post('/newPyme')
  @UseGuards(AuthGuard('jwt'))
  async newPyme(@Res() res: Response, @Body() pymeDTO: PymeDTO) {
    await this.pymeService.addnewPyme(pymeDTO);
    return res.json({
      ok: true,
      message: 'nueva pyme agregada correctamente',
    });
  }

  @Post('/addSocialNetwork/:id')
  @UseGuards(AuthGuard('jwt'))
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
  @UseGuards(AuthGuard('jwt'))
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

  @Post('/addProfile/:id')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: imageFileFilter,
    }),
  )
  async addProfileImage(
    @Res() res: Response,
    @Param('id') id,
    @UploadedFile() fileProfileImage: Express.Multer.File,
  ) {
    if (await this.pymeService.addProfileImage(id, fileProfileImage)) {
      res.status(HttpStatus.OK).json({
        ok: true,
        msg: 'Imagen de perfil agregada',
      });
    } else {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: true,
        msg: 'Error al subir imagen',
      });
    }
  }
}
