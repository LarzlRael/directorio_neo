import { Indicator } from '../layout/Indicator'
import { Cards } from '../components/widgets/card/Cards'
import { HeaderBlack } from '../layout/HeaderBlack'
import styled from 'styled-components'

import { v4 as uuidv4 } from 'uuid'
import { Loading } from '../components/widgets/loadings/Loading'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { sizeMedia } from '../styles/mediaQuerys'
import { PymeResponseResponse } from '../interfaces/pymeResponse'
import { RouteComponentProps } from 'react-router-dom'
import useAxiosAuth from '../hooks/useAxios'
import { Formik, Form, Field } from 'formik'
import { Button } from '../components/buttons/Button'
import { Search } from 'react-ionicons'
import { useState, useEffect } from 'react'
import { validateArray } from '../components/utils/validation/validation'
import { Label } from '../components/text/Label'
import { primaryColor } from '../context/themeColors'

interface SingleLocationProps extends RouteComponentProps<any> {
  /* label?: string */
}

export const SingleLocation = (props: SingleLocationProps) => {
  useDocumentTitle('Categorias')
  const [url, setUrl] = useState('/pymes')

  const { response: allPymes, loading, reload } = useAxiosAuth<
    PymeResponseResponse[]
  >({
    url: url,
    method: 'GET',
  })
  const preconfigArray = (
    array: PymeResponseResponse[],
  ): PymeResponseResponse[] => {
    return array.map((item: PymeResponseResponse) => {
      if (item.urlImages.length !== 0) {
        const imagesConverted = item.urlImages.map((image, i) => {
          const splitString = image.split('upload/')
          let resizeImage = `${splitString[0]}upload/c_scale,w_300/${splitString[1]}`
          return (item.urlImages[i] = resizeImage)
        })
        return { ...item, urlImages: imagesConverted }
      }
      return { ...item }
    })
  }
  interface initialValuesI {
    nombre: string
  }
  const initialValues = {
    nombre: '',
  }
  useEffect(() => {
    reload()
  }, [url])

  const onSubmit = (values: initialValuesI) => {
    if (values.nombre === '') {
      setUrl('/pymes')
    } else {
      setUrl(`/pymes/nombre/${values.nombre.trim().toLowerCase()}`)
    }
  }
  return (
    <div>
      <HeaderBlack />

      <Indicator {...props} />

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          {/* <InputSearch type="text"> */}
          <div
            style={{
              display: 'flex',
              margin: '3rem 2rem',
              alignContent: 'center',
              justifyContent: 'center',
            }}
          >
            <Field
              id="nombre"
              name="nombre"
              placeholder="Buscar Pyme o categoria"
              className="inputSearch"
            />

            <Button
              type="submit"
              background={primaryColor}
              icon={<Search color="#fff" height="16px" width="16px" />}
            >
              Buscar
            </Button>
          </div>
        </Form>
      </Formik>

      {!loading ? (
        validateArray(preconfigArray(allPymes)) ? (
          <GridContainer className="cards-container">
            {preconfigArray(allPymes).map((pyme) => (
              <Cards {...pyme} key={uuidv4()} />
            ))}
          </GridContainer>
        ) : (
          <Label textAlign="center" display="block">
            No se encontraron resultados
          </Label>
        )
      ) : (
        <Loading />
      )}
    </div>
  )
}

const GridContainer = styled.div`
  display: grid;
  gap: 2rem;
  max-width: $container-main;
  margin: 1.5rem auto;
  grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
  width: 1000px;

  @media ${sizeMedia('md')} {
    width: 90%;
  }
  @media ${sizeMedia('xs_sm')} {
    margin: 0.5rem auto;
    width: 100%;
    justify-content: center;
    padding: 1rem;
  }
`
