export interface PymeResponseResponse {
    urlImages:      string[];
    verificado:     string;
    _id:            string;
    nombre:         string;
    email:          string;
    telefono:       string;
    localizacion?:  string;
    direccion:      string;
    propietario:    string;
    description:    string;
    urlNegocio:    string;
    redes_sociales: RedesSociale[];
    __v:            number;
}

export interface RedesSociale {
    _id:    string;
    nombre: string;
}
