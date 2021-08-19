import { Verify } from '../verify.enum';
export interface PymeModel extends Document {
  nombre: string;
  propietario: string;
  categoria: string;
  urlNegocio: string;

  urlImages: string[];
  email: string;

  telefono: string;
  localizacion: string;
  direccion: string;
  description: string;
  redes_sociales: RedesSocialesDto[];
  verificado: Verify;
}

export interface RedesSocialesDto {
  nombre: string;
  urlRedSocial: string;
}
