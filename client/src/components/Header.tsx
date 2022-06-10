import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { appName } from '../strings';
import { IoMenuOutline } from 'react-icons/io5';
import { sizeMedia } from '../styles/mediaQuerys';


const HeaderContainer = styled.div`

    position:relative;
    display:flex;
    color:white;
    width: 1000px;
    max-width: 1000px;
    margin: 3rem auto;
    /*  */
    align-items: center;
    transition: .3s ease all;



    @media ${sizeMedia('xs_sm')} {
        margin: 0 ;
        max-width: 100%;
        width: 100%;
        background:#222222;
        align-items: flex-start ;
        flex-direction: column;
    }


`;

const Links = styled.div`
        
    @media ${sizeMedia('xs_sm')} {
    
        background:#222222;
        display:flex;
        flex-direction: column;
        position:absolute;
        top:3rem;
        
        transition: 0.3s ease all;
        width: 100%;
        z-index:100;

        &.open-menu {
        transform: translate(0%);
        }
        &.close-menu {
            transform: translate(-130%);
        }
}
    
`;

const LabelLogo = styled(Link) <{
    fontSize?: string;
    show?: boolean,
}>`
    font-size: ${({ fontSize }) => fontSize ? fontSize : '13px'} ;
    text-decoration:none;
    display: ${({ show }) => show ? 'none' : 'block'};
    color: white;

    @media ${sizeMedia('xs_sm')} {
        display: ${({ show }) => show ? 'none' : 'block'};
        color:white;
        margin-left: 1rem;
    }
`;

const LabelLink = styled(Link)`
    font-size:15px;
    margin: 0 20px;
    font-size: 0.9rem;
    text-decoration:none;
    color:white;
        
    
    @media ${sizeMedia('xs_sm')} {
        font-size: 0.9rem;
        margin : 10px 1rem;
        color:white;
    }
`;

const MenuIconContainer = styled.div`
        
    display:none;

    @media ${sizeMedia('xs_sm')} {

        display:block;
        font-size:1.2rem;
        margin : 10px 1rem;
    }
`;


export const Header = () => {

    const [menu, setShowMenu] = useState(false);

    const showMenu = () => {
        setShowMenu(true);

    }
    const hideMenu = () => {
        setShowMenu(false);
    }



    return (

        <HeaderContainer>
            <div className="logoContainer">

                <div className="logName">
                    <LabelLogo
                        fontSize="1.6rem"
                        to="/"
                    >
                        {appName}

                    </LabelLogo>

                    <MenuIconContainer>
                        <IoMenuOutline
                            height="35px"
                            width="35px"
                            color="#FFF"
                            onClick={menu ? hideMenu : showMenu}
                        />
                    </MenuIconContainer>
                </div>

                {/*    <label>
                    #1 Business directory
                </label> */}

            </div>
            {/*   open-menu
            close-menu */}
            <Links className={menu ? 'open-menu' : 'close-menu'}>
                {/* <Links className={menu ? 'close-menu' : 'open-menu'}> */}


                <LabelLink to="/">Inicio</LabelLink>

                <LabelLink to="/">Listado</LabelLink>

                <LabelLink to="/">Categorias</LabelLink>

                <LabelLink to="/">
                    Mi cuenta
                </LabelLink>
            </Links>

        </HeaderContainer >

    )
}
