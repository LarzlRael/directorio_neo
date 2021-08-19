/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { appName } from '../strings';
import { MenuOutline } from 'react-ionicons';
import { sizeMedia } from '../styles/mediaQuerys';

const HeaderMainContainer = styled.div<{
    blackTheme: boolean;
}>`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: .3s ease all;
    background: ${({ blackTheme }) => blackTheme ? '#2F3131' : ''};
`;

const HeaderContainer = styled.div`

    position:relative;
    display:flex;
    color:white;
    width: 1000px;
    max-width: 1000px;
    /* margin: 3rem auto; */
    margin: auto;
    /* padding header container size */
    padding: 1.5rem 0;
    align-items: center;
    

    @media ${sizeMedia('xs_sm')} {
        margin: 0 ;
        width: 100%;
        background:#222222;
        align-items: flex-start ;
        padding: 0;
        flex-direction: column;
    }
    @media ${sizeMedia('md')} {
        width: 100%;
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
    show?: boolean;
    blackTheme: boolean;
}>`
    font-size: ${({ fontSize }) => fontSize ? fontSize : '13px'} ;
    text-decoration:none;
    display: block;
    color:${({ blackTheme }) => blackTheme ? 'white' : 'black'};

    @media ${sizeMedia('xs_sm')} {
        display: block;
        color:white;
        margin-left: 1rem;
    }
`;

const LabelLink = styled(Link) <{ blackTheme: boolean; }>`
    font-size:15px;
    margin: 0 20px;
    font-size: 0.9rem;
    text-decoration:none;
    color:${({ blackTheme }) => blackTheme ? 'white' : 'black'};
        
    
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

export const HeaderBlack = () => {

    const [menu, setShowMenu] = useState(false);

    const showMenu = () => {
        setShowMenu(true);

    }
    const hideMenu = () => {
        setShowMenu(false);
    }

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            if (!className) {
                setclassName(true);
            }
        } else {
            setclassName(false);
        }
    }
    const [className, setclassName] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

    }, []);




    return (
        <HeaderMainContainer blackTheme={className}>
            <HeaderContainer >

                <div className="logoContainer">

                    <div className="logName">
                        <LabelLogo
                            blackTheme={className}
                            fontSize="1.6rem"
                            to="/"
                        >
                            {appName}

                        </LabelLogo>

                        <MenuIconContainer>
                            <MenuOutline
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


                    <LabelLink blackTheme={className} to="/">Inicio</LabelLink>

                    <LabelLink blackTheme={className} to="/">Listado</LabelLink>

                    <LabelLink blackTheme={className} to="/">Categorias</LabelLink>

                    <LabelLink blackTheme={className} to="/">
                        Mi cuenta
                    </LabelLink>
                </Links>

            </HeaderContainer >
        </HeaderMainContainer>
    )
}
