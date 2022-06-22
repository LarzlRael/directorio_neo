import React from 'react'
import { useLocation } from 'react-router'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'
import { sizeMedia } from '../../styles/mediaQuerys'
import { BackIcon } from './BackIcon'
import { H2, Span } from '../components/text/'

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
  nombre: string
}
interface StateType {
  backGroundImage: string
}
interface PropsIndicator extends RouteComponentProps<RouteParams> {
  label?: string
}

export const Indicator = ({ label, history, match }: PropsIndicator) => {
  const { state } = useLocation<StateType>()

  let { title, nombre } = match.params

  title = title.replace('-', ' ')

  return (
    <BreadContainer
      backGroundImage={
        state !== undefined
          ? state.backGroundImage
          : 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg'
      }
    >
      <Bread className="bread">
        <div className="pointer">
          <BackIcon onClick={() => history.goBack()} label="Regresar" />
        </div>
        <H2 color="white" fontSize="2.2rem" fontWeight="500" textAlign="start">
          {label ? label : title}
        </H2>
        <Span fontSize=".9rem" color="white" textAlign="start">
          Home / {label ? label : title} {nombre && ' / ' + nombre}
        </Span>
      </Bread>
    </BreadContainer>
  )
}
