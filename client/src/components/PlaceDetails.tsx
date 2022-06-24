import React from 'react'
import { Indicator } from '../components/Indicator'
import { useContext, useEffect } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

import { PymeContext } from '../context/PymeContext'
import { useParams } from 'react-router'
import { ContacInfo } from './pymeDetails/ContacInfo'
import { Profile } from './pymeDetails/Profile'
import { MapLocalization } from './pymeDetails/MapLocalization'
import { capitalizeFirstLetter } from './utils/utils'
import { ImageSlider } from './pymeDetails/ImageSlider'
import useAxiosAuth from '../hooks/useAxios'
import { PymeInterfaceResponse } from '../interfaces/pymeResponse'
import { HeaderBlack } from '../layout/HeaderBlack';

export const PlaceDetails = () => {
  /* const { onePyme, notFound } = useContext(PymeContext) */
  /* () > `pymes/${nombre}` */

  let { nombre } = useParams<{ id: string; nombre: string }>()
  const { response: onePyme, loading, reload } = useAxiosAuth<
    PymeInterfaceResponse
  >({
    url: `pymes/${nombre}`,
    method: 'GET',
  })

  /* useDocumentTitle(onePyme?.nombre ? onePyme?.nombre : '') */

  return (
    <>
      {!false ? (
        <div
          style={{
            background: '#F3F3F3',
          }}
        >
          <HeaderBlack />

          <Indicator />
          <div className="one-place">
            <div className="section-title">
              <div className="border-box section-container">
                <label htmlFor="" className="title-label">
                  {onePyme?.nombre}
                </label>
                <hr />

                <ImageSlider
                  urlImages={
                    onePyme?.urlImages.length !== 0 &&
                    onePyme?.urlImages.length !== undefined
                      ? onePyme!.urlImages
                      : [
                          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png',
                        ]
                  }
                />

                <div className="descripction">
                  <label htmlFor="">{onePyme?.nombre}</label>
                  <p>{capitalizeFirstLetter(onePyme?.description)}</p>
                </div>
              </div>

              <ContacInfo email={onePyme?.email} telefono={onePyme?.telefono} />

              {/* localization */}

              {onePyme?.localizacion && (
                <MapLocalization
                  localization={onePyme?.localizacion}
                  direction={onePyme?.direccion}
                />
              )}
            </div>

            <Profile
              nombre={onePyme?.nombre}
              propietario={onePyme?.propietario}
              urlNegocio={onePyme?.urlNegocio}
              urlProfile={onePyme?.profileImage}
              redesSociales={onePyme?.redes_sociales}
            />
          </div>
        </div>
      ) : (
        <div className="">No hay</div>
      )}
    </>
  )
}
