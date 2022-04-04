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

interface SingleLocationProps extends RouteComponentProps<any> {
  /* label?: string */
}

export const SingleLocation = (props: SingleLocationProps) => {
  useDocumentTitle('Categorias')

  const { response: allPymes, loading } = useAxiosAuth<PymeResponseResponse[]>({
    url: '/pymes/',
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

  return (
    <div>
      <HeaderBlack />

      <Indicator {...props} />

      {!loading ? (
        <GridContainer className="cards-container">
          {preconfigArray(allPymes).map((pyme) => (
            <Cards {...pyme} key={uuidv4()} />
          ))}
        </GridContainer>
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
