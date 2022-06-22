import React from 'react'
import { IoChevronBack } from 'react-icons/io5'

/* import { useLocation, useParams } from 'react-router'
import { useHistory } from 'react-router-dom' */
import styled from 'styled-components'
import { sizeMedia } from '../../styles/mediaQuerys'
import { useRouter } from 'next/router'
const Label = styled.label<{
  fontSize?: string
  marginbottom?: string
  bold?: boolean
}>`
  display: block;
  color: ${({ color }) => (color ? color : 'black')};
  font-size: ${({ fontSize }) => fontSize};
  display: block;
  text-transform: capitalize;
  margin: 1rem 0;
  font-weight: ${({ bold }) => bold && 'bold'};
`

const BreadContainer = styled.div<{ backGroundImage: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;

  background: linear-gradient(rgba(0, 0, 0, 0.7), hsla(0, 0%, 0%, 0.7)),
    url(${({ backGroundImage }) => backGroundImage}) center / cover;

  background-repeat: no-repeat;
`
const Bread = styled.div`
  width: 1000px;
  margin: auto;
  @media ${sizeMedia('sm')} {
    width: 90%;
  }
`

interface RouteParams {
  title: string
}
interface StateType {
  backGroundImage: string
}
interface Props {
  label?: string
}
export const Indicator = ({ label }: Props) => {
  const router = useRouter()
  /* router.pa
  const { state } = useLocation<StateType>() */

  const { id } = router.query

  const { main } = router.query
  /* const title = main?.replace('-', ' ') */

  return (
    <BreadContainer
      backGroundImage={
        'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg'
      }
    >
      <Bread className="bread">
        <div className="pointer">
          <IoChevronBack
            width="25px"
            height="25px"
            color="white"
            onClick={history.back}
          />
        </div>
        <Label color="white" fontSize="2.3rem">
          {label ? label : 'title'}
        </Label>
        <Label fontSize=".9rem" color="white">
          Home / {label ? label : 'title'} {'nombre' && ' / ' + 'nombre'}
        </Label>
      </Bread>
    </BreadContainer>
  )
}
