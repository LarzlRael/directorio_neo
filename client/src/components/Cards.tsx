import { IoBagAddOutline, IoBeakerOutline, IoCheckmarkCircle, IoEyeOutline, IoLogoFacebook, IoLogoGoogle, IoLogoInstagram } from 'react-icons/io5';
import { Link } from "react-router-dom";
import { PymeResponseResponse, RedesSociales } from '../interfaces/pymeResponse';

export const Cards = ({ nombre, urlImages, redes_sociales, verificado, _id }: PymeResponseResponse) => {
    return (
        <div className={`single-card flex ${verificado === 'verificado' && 'verificado'}`}>
            {verificado === 'verificado' &&
                <div className="check">
                    <IoCheckmarkCircle
                        width="45px"
                        height="45px"
                        color="#5EDD6A"
                    />
                </div>
            }

            <Link to={`/productos/confecciones/${nombre}`}>
                <img
                    className="main-image"
                    src={urlImages[0] ? urlImages[0] : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'}
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
                    <LabelAndIcon
                        {...red_social}
                    />
                ))}
                {/*  <div className="info-card flex">
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

                </div> */}

            </div>


        </div>

    )
}


const LabelAndIcon = ({ nombre, urlRedSocial }: RedesSociales) => {

    return (
        <div style={{
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
        }}>

            {nombre === 'Instagram' && <IoLogoInstagram
                color="#C13584"
                height="25px"
                width="25px"
            />}
            {nombre === 'Facebook' && <IoLogoFacebook
                color="#3b5998"
                height="25px"
                width="25px"
            />}

            <a
                href={urlRedSocial}
                target="_blank"
                style={{
                    textDecoration: 'none',
                    marginLeft: '1rem',
                    color: '#7a82a6',
                    fontSize: '0.9rem',
                }} rel="noreferrer">{nombre}</a>
        </div>
    )
}