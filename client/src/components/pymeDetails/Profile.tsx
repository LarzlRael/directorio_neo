import React from 'react'
import { Heart, MailOutline, LogoFacebook, LogoWhatsapp, LogoInstagram } from 'react-ionicons';
import { RedesSociales } from '../../interfaces/pymeResponse';

interface ProfileProps {
    nombre?: string;
    urlNegocio?: string;
    propietario?: string;
    urlProfile?: string;
    redesSociales?: RedesSociales[];
}

export const Profile = ({ nombre, urlNegocio, propietario, urlProfile, redesSociales }: ProfileProps) => {
    return (
        <div className="informationPlace">
            <div className="information">
                <div>
                    <label className="title-content">
                        Informacion de autor
                    </label>
                </div>

                <div className="border-box profile">

                    <div className="heart pointer">
                        <Heart
                            width="40px"
                            height="40px"
                            color="#ED4956"
                        />
                        {/*  <Recaptcha
                                    sitekey="6LeNLlwbAAAAAIcmdcPPXIlukfpWeRN0bNOT7_xo"
                                    render="explicit"
                                /> */}

                    </div>

                    <div className="info-profile flex">
                        <div className="image">
                            <img src={urlProfile ? urlProfile : 'https://cdn.iconscout.com/icon/premium/png-256-thumb/profile-1506810-1278719.png'} style={{
                                borderRadius: '100%',
                                height: '60px',
                                width: '60px',
                                marginRight: '0.5rem',
                            }}
                                alt="profile"
                            />
                        </div>

                        <div className="nameAndCategory">
                            <label htmlFor="">{nombre}</label>
                            <p style={{
                                fontSize: '14px'
                            }}>Miembro desde hace 1 a??o</p>
                        </div>

                    </div>
                    <div className="contact">
                        <div className="icon flex">
                            <MailOutline
                                width="20px"
                                height="20px"
                            />
                            <label
                                style={{
                                    marginLeft: '0.5rem',
                                }}
                            >{urlNegocio ? urlNegocio : 'Todavia no hay Url we'}</label>
                        </div>
                        <a href="https://demo.directorist.com/plugin/demo-one/directory/the-british-museum/"
                            style={{
                                textDecoration: 'none',
                                color: '#202428',
                            }}
                        >
                            {propietario ? propietario : 'Propietario'}
                        </a>

                        <div className="social-media flex pointer"
                            style={{
                                marginTop: '1rem',
                                justifyContent: 'space-evenly'
                            }}
                        >
                            {
                                redesSociales?.map(({ nombre, _id, urlRedSocial }) => (
                                    <SocialLink
                                        nombre={nombre}
                                        _id={_id}
                                        key={_id}
                                        urlRedSocial={urlRedSocial} />

                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const SocialLink = ({ nombre, urlRedSocial }: RedesSociales) => {
    switch (nombre) {
        case 'Instagram':
            return (
                <a href={urlRedSocial} target="_blank" rel="noopener noreferrer">
                    <LogoInstagram
                        color="#C13584"
                        width="35px"
                        height="35px"
                    />
                </a>
            );
        case 'Facebook':
            return (
                <a href={urlRedSocial} target="_blank" rel="noopener noreferrer">

                    <LogoFacebook
                        color="#3b5998"
                        width="35px"
                        height="35px" />
                </a>

            )
        case 'Whatsapp':
            return (
                <LogoWhatsapp
                    color="#25D366"
                    width="35px"
                    height="35px"
                />
            )


        default:
            return <> </>;
    }
}