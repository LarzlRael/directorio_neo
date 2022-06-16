<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';
import { IconFilterList } from './IconFilter';
import { IoSearch } from 'react-icons/io5';
import { sizeMedia } from '../styles/mediaQuerys';

const FormContainer = styled.form`
    display:flex;
    flex-wrap:wrap;
    
    justify-content:space-between;
    background:white;
    padding: 10px 15px;
    border-radius: 10px;
    margin : 1.5rem 0;
    @media ${sizeMedia('xs_sm')} {
        background: none;
        padding: 0;
    }
    @media ${sizeMedia('md')} {
        /* width: 80%; */
    }
`;


const LabelTitle = styled.label`
    font-size:32px;
    color:white;
    display:block;
    text-align:center;
    font-weight:bold;
`;
const LabelSubTitle = styled.span`
    font-size:18px;
    color:white;
    display:block;
    margin-top:1rem;
    text-align:center;
    color: #d8dee4;
    margin-bottom:3rem;
`;


const InputSearch = styled.input`
    padding:15px;
    border: none;
    &:focus {
        outline: none;
    }
    @media ${sizeMedia('xs_sm')} {
        width: 100%;
        border-radius: 5px;
        margin-top: 0.5rem;
    }
`;

const Button = styled.button<{
    textColor?: string,
    backGroundColor?: string,
=======
import styled from 'styled-components'
import { Search } from 'react-ionicons'
import { sizeMedia } from '../styles/mediaQuerys'
import { primaryColor } from '../context/themeColors'
import { H2, Span } from './text'
import { Form, Formik, Field } from 'formik'
import { Button } from './buttons/Button'

const FormContainerdDiv = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */
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

export const H2Styled = styled.h2<{
  fontSize?: string
  fontWeight?: string
>>>>>>> origin/dev
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
<<<<<<< HEAD

    const onSubmit = (e: any) => {
        e.preventDefault();

    }

    return (
        <div className="SearchFilter">

            <LabelTitle htmlFor="">Discover great places nearby</LabelTitle>

            <LabelSubTitle>Find the best match of intersts</LabelSubTitle>

            <IconFilterList theme="dark" />

            <FormContainer action="" onSubmit={onSubmit}>

                <InputSearch type="text" placeholder="Where to look?" />
                <InputSearch type="text" placeholder="All categories" />
                <InputSearch type="text" placeholder="what are you looking for ? " />

                <ContainerButtons>
                    <Button
                        textColor="black"
                        backGroundColor="white">Filtro</Button>


                    <Button>
                        <IoSearch
                            color={'#fff'}

                            height="20px"
                            width="20px"
                        />
                        Buscar</Button>
                </ContainerButtons>

            </FormContainer>

            <IconFilterList theme="dark" />
        </div>
    )
=======
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

      <FormContainerdDiv>
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
              <Button textColor="black" background="white">
                Filtro
              </Button>

              <Button
                type="submit"
                background={primaryColor}
                icon={<Search color="#fff" height="16px" width="16px" />}
              >
                Buscar
              </Button>
            </ContainerButtons>
          </Form>
        </Formik>
      </FormContainerdDiv>

      {/* <IconFilterList theme="dark" /> */}
    </div>
  )
>>>>>>> origin/dev
}
