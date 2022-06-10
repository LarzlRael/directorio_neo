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
}>`
    background:${({ backGroundColor }) => backGroundColor ? backGroundColor : '#444752'};
    color:${({ textColor }) => textColor ? textColor : 'white'};
    padding: .7rem;
    border-radius:5px;
    border: none;
    display:flex;
    align-items:center;
    cursor:pointer;
    
`;
const ContainerButtons = styled.div`
    display:flex;
    justify-content:space-between;
    

    @media ${sizeMedia('xs_sm')} {
        width:100%;
        
        margin-top:0.5rem;   
        justify-content:space-around;
    }
`;

export const SearchFilter = () => {

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
}
