
import { Indicator } from '../components/Indicator'
import { useState, useContext, useEffect } from 'react';
import { Modal } from './Modal';
import { useSliderImage } from '../hooks/useSliderImage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { HeaderBlack } from './HeaderBlack';
import { PymeContext } from '../context/PymeContext';
import { useParams } from 'react-router';
import { ContacInfo } from './pymeDetails/ContacInfo';
import { Profile } from './pymeDetails/Profile';
import { MapLocalization } from './pymeDetails/MapLocalization';


export const PlaceDetails = () => {

    const { getOnePyme, onePyme, notFound } = useContext(PymeContext);
    let { id } = useParams<{ id: string }>();

    useEffect(() => {
        getOnePyme(id);
    }, [])

    useDocumentTitle(onePyme?.nombre ? onePyme?.nombre : 'xd');

    //custom hook animation and slider
    const {
        currentImage,
        changeImage,
        animation,
        setAnimation

    } = useSliderImage();

    /* if (onePyme?.localizacion !== undefined) {
        const coords = onePyme?.localizacion.split(',');
        console.log(coords);
    } */


    const [modalState, setModalState] = useState(false);


    const changeStatexd = () => {
        setModalState(true);
    }

    return (
        <>
            {
                !notFound ?
                    <div style={{
                        background: '#F3F3F3',
                    }} >
                        <HeaderBlack />

                        <Indicator />
                        <div className="one-place">
                            <div className="section-title">
                                <div className="border-box section-container">
                                    <label htmlFor="" className="title-label">
                                        {onePyme?.nombre && 'xd'}
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

                                            {onePyme?.urlImages.map((image, i) => (
                                                <div className="image-item pointer"
                                                    key={i}
                                                >
                                                    <img
                                                        src={`${image}`}
                                                        alt="que fue :D"
                                                        onClick={
                                                            () => changeImage(`${image}`, i)
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
                                        <label htmlFor="">{onePyme?.nombre}</label>
                                        <p>{onePyme?.description}</p>
                                    </div>
                                </div>

                                <ContacInfo
                                    email={onePyme?.email}
                                    telefono={onePyme?.telefono}
                                />

                                {/* localization */}

                                {onePyme?.localizacion &&
                                    <MapLocalization
                                        localization={onePyme?.localizacion}
                                        direction={onePyme?.direccion}
                                    />
                                }
                            </div>

                            <Profile
                                nombre={onePyme?.nombre}
                                propietario={onePyme?.propietario}
                                urlNegocio={onePyme?.urlNegocio}
                            />
                        </div >
                    </div >
                    : <div className="">No se encotro nada we</div>
            }
        </>
    )
}



