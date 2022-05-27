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
import { PymeInterfaceResponse } from '../interfaces/pymeResponse'
import { RouteComponentProps } from 'react-router-dom'
import useAxiosAuth from '../hooks/useAxios'
import { H2, Span, P } from './text'

interface PlaceDetailsProps
  extends RouteComponentProps<{ id: string; nombre: string; title: string }> {
  /* label?: string */
}

export const PymeDetails = (props: PlaceDetailsProps) => {
  let { nombre } = props.match.params

  const { response: onePyme, loading, reload } = useAxiosAuth<
    PymeInterfaceResponse
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
                <H2
                  color="#000"
                  textAlign="start"
                  fontSize="1.5rem"
                  fontWeight="bold"
                  margin="1rem 0 0 0"
                >
                  {capitalizeFirstLetter(onePyme.nombre)}
                </H2>
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
                  <Span
                    fontSize="1.5rem"
                    textAlign="start"
                    fontWeight="600"
                    color="#000"
                  >
                    {capitalizeFirstLetter(onePyme?.nombre)}
                  </Span>
                  <P
                    fontSize=" 15px"
                    /* fontWeight= "400" */
                    lineHeight="25px"
                    margin="0.5rem 0"
                  >
                    {capitalizeFirstLetter(onePyme?.description)}
                  </P>
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

            <Profile pyme={onePyme} />
          </div>
        </div>
      ) : (
        <div className="">No hay</div>
      )}
    </>
  )
}
