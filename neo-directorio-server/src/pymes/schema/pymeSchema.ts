import { Schema } from 'mongoose';

export const PymeSchema = new Schema({
  nombre: String,
  propietario: String,
  categoria: String,
  email: String,
  telefono: String,
  localizacion: String,
  direccion: String,
  urlImages: [String],
  urlNegocio: String,
  description: String,
  redes_sociales: [{ nombre: String, url: String }],
  verificado: {
    type: String,
    default: 'no_verificado',
  },
});

/* @IsString()
@IsNotEmpty()
nombre: string;
propietario: string;
categoria: string;

@IsOptional()
urlNegocio: string;
UrlImages: string[];
@IsEmail()
email: string;

@IsString()
@IsOptional()
telefono: string;
localizacion: string;
direccion: string;
description: string;
redes_sociales: RedesSociales[];

@IsEnum(VerifyType)
verificado: VerifyType; */
