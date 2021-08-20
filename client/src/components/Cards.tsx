import { BagAddOutline, BeakerOutline, EyeOutline } from "react-ionicons"
import { Link } from "react-router-dom";
import { RedesSociale } from '../interfaces/pymeResponse';

interface propsCard {
    _id: string;
    urlImages: string;
    verificado: string;
    nombre: string;
    redes_sociales: RedesSociale[];
}

export const Cards = ({ nombre, urlImages, redes_sociales, _id }: propsCard) => {
    return (
        <div className="single-card flex">
            <Link to={`/single-location/information-tecnology/details/${_id}`}>
                <img
                    className="main-image"
                    src={urlImages ? urlImages : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'}
                    alt={nombre}
                />
            </Link>
            <div className="contenido">

                <label style={{
                    display: 'block',
                    marginBottom: '1rem',
                    fontWeight: 500,
                    fontSize: '18px',
                }}>{nombre}</label>

                {/*   <LabelAndIcon icon={
                    <BagAddOutline
                        color="#7a82a6"
                        height="20px"
                        width="20px"
                    />
                }
                    label="Informacion"
                />
                <LabelAndIcon icon={
                    <BagAddOutline
                        color="#7a82a6"
                        height="20px"
                        width="20px"
                    />
                }
                    label="De contacto"
                /> */}
                {redes_sociales.map(red_social => (
                    <LabelAndIcon icon={
                        <BagAddOutline
                            color="#7a82a6"
                            height="20px"
                            width="20px"
                        />
                    }
                        label={red_social.nombre}
                    />
                ))}
                <div className="info-card flex">
                    <LabelAndIcon icon={
                        <BeakerOutline
                            color="#7a82a6"

                            height="20px"
                            width="20px"
                        />
                    }
                        label="Historial +1"
                    />

                    <LabelAndIcon icon={
                        <EyeOutline
                            color="#7a82a6"
                            height="18px"
                            width="18px"
                        />
                    }
                        label="1200"
                    />

                </div>

            </div>


        </div>

    )
}

interface Props {
    icon: any,
    label: string,

};
const LabelAndIcon = ({ icon, label }: Props) => {

    return (
        <div style={{
            marginBottom: '0.5rem',
            display: 'flex',
            alignContent: 'center'

        }}>

            {icon}
            <label style={{
                marginLeft: '1rem',
                color: '#7a82a6',
                fontSize: '0.9rem',
            }}>{label}</label>
        </div>
    )
}