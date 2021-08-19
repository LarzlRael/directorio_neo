
import { Indicator } from '../components/Indicator'
/* import { Cards } from '../components/Cards'; */
import { useState } from 'react';

import { Modal } from './Modal';
import { MailOutline, CallOutline, MapOutline, LogoWhatsapp, Heart } from 'react-ionicons';
import ReactMapGL from 'react-map-gl';
import { LogoFacebook } from 'react-ionicons';
import { useSliderImage } from '../hooks/useSliderImage';
import { useDirectionsMap } from '../hooks/useDirectionsMap';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { HeaderBlack } from './HeaderBlack';


var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


/* const mapboxglAccessToken = process.env.REACT_APP_MAPBOX_KEY; */

const images = [1, 3, 4, 5, 10, 11, 12];

export const PlaceDetails = () => {

    const name = 'Nombre del negocio';
    useDocumentTitle(name);

    //custom hook animation and slider
    const {
        currentImage,
        changeImage,
        animation,
        setAnimation

    } = useSliderImage();


    const {
        viewport,
        setViewport,
        mapboxglAccessToken
    } = useDirectionsMap(-68.190434, -16.534593);


    const [modalState, setModalState] = useState(false);

    const changeStatexd = () => {
        setModalState(true);
    }

    return (
        <div style={{
            background: '#F3F3F3',
        }}>
            <HeaderBlack />

            <Indicator />
            <div className="one-place">
                <div className="section-title">
                    <div className="border-box section-container">
                        <label htmlFor="" className="title-label">
                            {name}
                        </label>
                        <hr />
                    
                        <div className='images-container'>
                            <div
                                className=
                                {`main-image ${animation
                                    ? 'fadeInAnimation' : ''}`}
                                onAnimationEnd={() => setAnimation(false)}

                                onClick={
                                    changeStatexd
                                }
                            >
                               {/*  <div className="flechas">
                                    <ChevronForwardCircle
                                        width="35px"
                                        height="35px"
                                        color="white"
                                        cssClasses="rotate-turn"
                                        onClick={changePrevImage}
                                    />
                                    <ChevronForwardCircle
                                        width="35px"
                                        height="35px"
                                        color="white"
                                        onClick={changeNextImage}
                                    />

                                </div> */}
                                <img
                                    className="main-current-image"
                                    src={currentImage.currentUrl}

                                    alt="" />
                            </div>

                            <div className="images-info">

                                {images.map((image, i) => (
                                    <div className="image-item pointer"
                                        key={i}
                                    >
                                        <img
                                            src={`https://picsum.photos/id/${i}/900/1024`}
                                            alt=""
                                            onClick={
                                                () => changeImage(`https://picsum.photos/id/${i}/900/1024`, i)
                                            }
                                            onAnimationEnd={() => setAnimation(false)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>


                        <Modal
                            state={modalState}
                            changeState={setModalState}
                            titulo="que fue"
                            mostrarHeader={false}
                            padding="0px"
                        >
                            <img src={currentImage.currentUrl} alt=""
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </Modal>

                        <div className="descripction">
                            <label htmlFor="">Mi negocio</label>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugit atque quo modi perspiciatis numquam magni? Vel quia voluptas pariatur, vitae aperiam sint dolores aliquid totam, ea laudantium illo nisi?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis corporis maxime corrupti et numquam atque odit officiis dicta quos temporibus quasi nesciunt omnis, veniam quia nihil deleniti perspiciatis sequi dignissimos.
                            </p>
                        </div>
                    </div>
                    <div className="border-box contact-information">
                        <label className="title-content">
                            Informacion de contacto
                        </label>

                        <ContactInfo
                            icon={
                                <CallOutline
                                    width="20px"
                                    height="20px"
                                />
                            }
                            title="Telefono"
                            contactInfo="+519 63116511"
                        />

                        <ContactInfo
                            icon={
                                <MailOutline
                                    width="20px"
                                    height="20px"
                                />
                            }
                            title="Email"
                            contactInfo="negocio.exitoso@gmail.com"
                        />

                    </div>

                    <div className="border-box location">
                        <label className="title-content">Localizacion</label>

                        <div className="flex info-category">
                            <div className="flex icon-info">
                                <div className="icono">
                                    <MapOutline
                                        width="20px"
                                        height="20px"
                                    />
                                </div>
                                <label htmlFor=""
                                    style={{
                                        marginLeft: '0.5rem'
                                    }}
                                >Direccion</label>
                            </div>
                            <div className=""
                                style={{
                                    width: '100%',
                                }}
                            ></div>

                            <div className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate recusandae dignissimos iusto amet quasi eaque, ipsam labore commodi, repellat tempore ut possimus, nemo magnam iste itaque beatae ipsum saepe rem?</div>
                        </div>

                        <div className="map"

                            style={{
                                width: '100%',
                                marginTop: '2rem',
                                height: '450px',
                            }}
                        >
                            <a href={`https://www.google.com.bo/maps/@${viewport.latitude},${viewport.longitude},17z?hl=es`} target="blank">

                                <ReactMapGL
                                    {...viewport}
                                    width="100%"
                                    height="100%"
                                    onViewportChange={setViewport}
                                    mapboxApiAccessToken={mapboxglAccessToken}
                                    mapStyle='mapbox://styles/mapbox/streets-v11'
                                >
                                    {/* <Marker
                                    latitude={viewport.latitude}
                                    longitude={viewport.longitude}
                                    >
                                    <Navigate
                                    width="30px"
                                    height="30px"
                                    />
                                </Marker> */}
                                </ReactMapGL>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="informationPlace" id="mapa">
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
                                    <label htmlFor="">Admin</label>
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
                                    >https://negocioexitoso.online/</label>
                                </div>
                                <a href="https://demo.directorist.com/plugin/demo-one/directory/the-british-museum/"
                                    style={{
                                        textDecoration: 'none',
                                        color: '#202428',
                                    }}
                                >
                                    https://negocioexitoso.online
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
                    <br />
                    <div className="contact border-box">
                        {/* <label className="title-content">
                            Comuníquese con el propietario del negocio
                        </label>

                        <form action="" onSubmit={onSubmit}>
                            <input className="input" type="text" placeholder="Nombre" />
                            <input className="input" type="text" placeholder="Correo" />
                            <textarea
                                className="input area"
                                placeholder="Mensaje"></textarea>
                            <div className="button">
                                <button>Enviar</button>
                            </div>
                        </form> */}
                        <div className="button">
                            <button>Contáctanos</button>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}



interface Props {
    title: string;
    contactInfo: string;
    icon: any;
};
export const ContactInfo = ({ title, contactInfo, icon }: Props) => {
    return (
        <div className="flex info-category">
            <div className="flex icon-info">
                {/* Icon from ionIcons */}
                {icon}
                <label htmlFor=""
                    style={{
                        marginLeft: '0.5rem',
                    }}
                >{title}</label>
            </div>

            <label htmlFor="">{contactInfo}</label>
        </div>
    )
}


