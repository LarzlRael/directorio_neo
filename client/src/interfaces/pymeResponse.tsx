export interface PymeResponseResponse {
    urlImages: string[];
    verificado: string;
    _id: string;
    nombre: string;
    email: string;
    telefono: string;
    localizacion?: string;
    direccion: string;
    propietario: string;
    description: string;
    urlNegocio: string;
    profileImage: string;
    redes_sociales: RedesSociales[];
    __v: number;
}

export interface RedesSociales {
    _id: string;
    nombre: keyof typeof RedSocialEnum;
    urlRedSocial: string;
}
enum RedSocialEnum {
    Facebook = 'Facebook',
    Instagram = 'Instagram',
    Twitter = 'Twitter',
    Tiktok = 'Tik tok',
    Whatsapp = 'Whatsapp',
}
