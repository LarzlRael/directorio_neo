import React from 'react'
import styled from 'styled-components'
import { IconFilterList } from './IconFilter'
import { IoSearch } from 'react-icons/io5'
import { sizeMedia } from '../styles/mediaQuerys'
import { H2 } from './text/H2'
import { Span } from './text'
import { Field, Form, Formik } from 'formik'
import { primaryColor } from '../context/themeColors';

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  background: white;
  padding: 10px 15px;
  border-radius: 10px;
  margin: 1.5rem 0;
  @media ${sizeMedia('xs_sm')} {
    background: none;
    padding: 0;
  }
  @media ${sizeMedia('md')} {
    /* width: 80%; */
  }
`

const LabelTitle = styled.label`
  font-size: 32px;
  color: white;
  display: block;
  text-align: center;
  font-weight: bold;
`
const LabelSubTitle = styled.span`
  font-size: 18px;
  color: white;
  display: block;
  margin-top: 1rem;
  text-align: center;
  color: #d8dee4;
  margin-bottom: 3rem;
`

const InputSearch = styled.input`
  padding: 15px;
  border: none;
  &:focus {
    outline: none;
  }
  @media ${sizeMedia('xs_sm')} {
    width: 100%;
    border-radius: 5px;
    margin-top: 0.5rem;
  }
`

const Button = styled.button<{
  textColor?: string
  backGroundColor?: string
  fontSize?: string
  fontWeight?: string
}>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.5rem')};
  color: white;
  display: block;
  text-align: center;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'bold')};
`

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${sizeMedia('xs_sm')} {
    width: 100%;
    margin-top: 1rem;
    justify-content: space-around;
  }
`

export const SearchFilter = () => {
  const onSubmit = (values: any) => {
    /* console.log(values) */
  }
  const initialValues = {
    category: '',
    category2: '',
    search: '',
  }

  return (
    <div className="SearchFilter">
      <H2 marginResponsive="0" fontSize="2rem" fontWeight="bold" color="#fff">
        Descubre las pymes que trabajan con nosotros
      </H2>

      <Span color="#fff" margin="3rem 0" marginResponsive="1rem 0">
        Buscar por nombre o por categoría
      </Span>

      {/* <IconFilterList theme="dark" /> */}

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="form-inline">
          {/* <InputSearch type="text"> */}
          <div>
            {' '}
            <Field
              id="category"
              name="category"
              placeholder="¿Donde estas buscando?"
              className="inputSearch"
            />
            <Field
              id="category2"
              name="category2"
              placeholder="Todas las categorias"
              className="inputSearch"
            />
            <Field
              id="search"
              name="search"
              placeholder="¿Donde estas buscando?"
              className="inputSearch"
            />
          </div>

          {/* <IconFilterList /> */}

          <ContainerButtons>
            <Button textColor="black" backGroundColor="white">
              Filtro
            </Button>

            <Button
              type="submit"
              backGroundColor={primaryColor}
              /* icon={<IoSearch color="#fff" height="16px" width="16px" />} */
            >
              Buscar
            </Button>
          </ContainerButtons>
        </Form>
      </Formik>

      {/* <IconFilterList theme="dark" /> */}
    </div>
  )
}
