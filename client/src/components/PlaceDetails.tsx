/* eslint-disable react-hooks/exhaustive-deps */

import { Indicator } from '../layout/Indicator'
import { useEffect } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { HeaderBlack } from '../layout/HeaderBlack'
import { ContacInfo } from './pymeDetails/ContacInfo'
import { Profile } from './pymeDetails/Profile'
import { MapLocalization } from './pymeDetails/MapLocalization'
import { capitalizeFirstLetter } from './utils/utils'
import { ImageSlider } from './pymeDetails/ImageSlider'
import { Loading } from './widgets/loadings/Loading'
import { PymeResponseResponse } from '../interfaces/pymeResponse'
import { RouteComponentProps } from 'react-router-dom'
import useAxiosAuth from '../hooks/useAxios'

interface PlaceDetailsProps
  extends RouteComponentProps<{ id: string; nombre: string }> {
  /* label?: string */
}

export const PlaceDetails = (props: PlaceDetailsProps) => {
  let { nombre } = props.match.params

  const { response: onePyme, loading, reload } = useAxiosAuth<
    PymeResponseResponse
  >({
    url: `/pymes/${nombre}`,
    method: 'GET',
  })

  useEffect(() => {
    reload()
  }, [nombre])

  useDocumentTitle(onePyme?.nombre!)

  return (
    <>
      {loading ? (
        <Loading />
      ) : !onePyme !== null ? (
        <div
          style={{
            background: '#F3F3F3',
          }}
        >
          <HeaderBlack />

          <Indicator {...props} />
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
                          'https://sinapsis.uao.edu.co/wp-content/uploads/sites/13/2020/04/0.png',
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

            <Profile {...onePyme} />
          </div>
        </div>
      ) : (
        <div className="">No hay</div>
      )}
    </>
  )
}
