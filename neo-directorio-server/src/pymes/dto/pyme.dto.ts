import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { Verify as VerifyType } from '../verify.enum';
export class PymeDTO {
  @IsString()
  @IsNotEmpty()
  nombre: string;
  propietario: string;
  categoria: string;
  urlNegocio: string;

  @IsOptional()
  urlImages: string[];
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  telefono: string;
  localizacion: string;
  direccion: string;
  description: string;
  redes_sociales: RedesSocialesDto[];

  @IsEnum(VerifyType)
  verificado: VerifyType;
}

class LatLng {
  latittude: string;
  longitude: string;
}

export class RedesSocialesDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsUrl()
  @IsNotEmpty()
  urlRedSocial: string;
}
