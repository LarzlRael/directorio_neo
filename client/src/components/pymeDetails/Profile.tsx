import React from 'react'
import { Heart, MailOutline, LogoFacebook, LogoWhatsapp } from 'react-ionicons';

interface ProfileProps {
    nombre: string | undefined;
    urlNegocio: string | undefined;
    propietario: string | undefined;
}

export const Profile = ({ nombre, urlNegocio, propietario }: ProfileProps) => {
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
                            <img src="https://demo.directorist.com/plugin/demo-one/wp-content/uploads/2021/05/author-3.png" style={{
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
                            }}>Miembro desde hace 1 año</p>
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
                            <LogoFacebook
                                color="#3b5998"
                                width="35px"
                                height="35px" />
                            <LogoWhatsapp
                                color="#25D366"
                                width="35px"
                                height="35px"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
