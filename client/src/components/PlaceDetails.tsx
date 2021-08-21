/* eslint-disable react-hooks/exhaustive-deps */

import { Indicator } from '../components/Indicator'
import { useContext, useEffect } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { HeaderBlack } from './HeaderBlack';
import { PymeContext } from '../context/PymeContext';
import { useParams } from 'react-router';
import { ContacInfo } from './pymeDetails/ContacInfo';
import { Profile } from './pymeDetails/Profile';
import { MapLocalization } from './pymeDetails/MapLocalization';
import { capitalizeFirstLetter } from './utils/utils';
import { ImageSlider } from '../hooks/useSliderImage';


export const PlaceDetails = () => {

    const { getOnePyme, onePyme, notFound } = useContext(PymeContext);
    let { id } = useParams<{ id: string }>();

    useEffect(() => {
        getOnePyme(id);
    }, [])

    useDocumentTitle(onePyme?.nombre ? (onePyme?.nombre) : '');

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
                                        {onePyme?.nombre}
                                    </label>
                                    <hr />

                                    <ImageSlider urlImages={onePyme?.urlImages.length !== 0 && onePyme?.urlImages.length !== undefined ? onePyme!.urlImages : ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png']} />



                                    <div className="descripction">
                                        <label htmlFor="">{onePyme?.nombre}</label>
                                        <p>{capitalizeFirstLetter(onePyme?.description)}</p>
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
                                urlProfile={onePyme?.profileImage}
                            />
                        </div >
                    </div >
                    : <div className="">No se encotro nada we</div>
            }
        </>
    )
}



