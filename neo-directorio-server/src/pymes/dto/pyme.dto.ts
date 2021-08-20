import {
  IsEmail,
  IsEnum,
  IsLatLong,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  isPhoneNumber,
  IsString,
  IsUrl,
} from 'class-validator';
import { Verify as VerifyType } from '../verify.enum';
export class PymeDTO {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  propietario: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsUrl()
  @IsOptional()
  urlNegocio: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  urlImages: string[];
  @IsEmail()
  email: string;

  @IsNumber()
  @IsOptional()
  telefono: string;

  @IsString()
  @IsOptional()
  direccion: string;

  @IsString()
  @IsOptional()
  redes_sociales: RedesSocialesDto[];

  @IsEnum(VerifyType)
  verificado: VerifyType;

  @IsOptional()
  @IsLatLong()
  localizacion: string;
}

export class RedesSocialesDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsUrl()
  @IsNotEmpty()
  urlRedSocial: string;
}

export class localizacion {
  lat: string;
  lng: string;
}
