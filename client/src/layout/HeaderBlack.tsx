/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { appName } from '../strings'
import { sizeMedia } from '../styles/mediaQuerys'
import { primaryColor } from '../context/themeColors'
import { Label } from '../components/text/Label'

const HeaderMainContainer = styled.div<{
  blackTheme: boolean
}>`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.3s ease all;
  background: ${({ blackTheme }) => (blackTheme ? 'var(--colorPrimary)' : '')};
`

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  color: white;
  width: 1000px;
  max-width: 1000px;
  /* margin: 3rem auto; */
  margin: auto;
  /* padding header container size */
  padding: 1.5rem 0;
  align-items: center;

  @media ${sizeMedia('xs_sm')} {
    margin: 0;
    width: 100%;
    background: ${primaryColor};
    align-items: flex-start;
    padding: 0;
    flex-direction: row;
  }
  @media ${sizeMedia('md')} {
    width: 100%;
  }
`

const Links = styled.div`
  @media ${sizeMedia('xs_sm')} {
    background: ${primaryColor};
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 3rem;
    transition: 0.3s ease all;
    width: 100%;

    &.open-menu {
      margin-left: 0;
      transform: translate(0%);
    }

    &.close-menu {
      transform: translate(-130%);
    }
  }
`

const LabelLink = styled(Link)<{ blackTheme: boolean }>`
  font-size: 15px;
  margin: 0 20px;
  font-size: 0.9rem;
  text-decoration: none;
  color: ${({ blackTheme }) => (blackTheme ? 'white' : 'black')};

  @media ${sizeMedia('xs_sm')} {
    font-size: 0.9rem;
    margin: 10px 1rem;
    color: white;
  }
`

export const HeaderBlack = () => {
  const [menu, setShowMenu] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      if (!className) {
        setclassName(true)
      }
    } else {
      setclassName(false)
    }
  }
  const [className, setclassName] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <HeaderMainContainer blackTheme={className}>
      <HeaderContainer>
        <div className="logoContainer">
          <Link
            to="/"
            style={{
              textDecoration: 'none',
            }}
          >
            <div className="logoNameDark">
              <img
                style={{
                  height: '35px',
                  width: '100px',
                }}
                src={
                  className
                    ? 'https://res.cloudinary.com/daij4l3is/image/upload/v1649110421/assets/dggjx7ttzzzier7zoqic.png'
                    : 'https://negocioexitoso.online/wp-content/uploads/2022/04/logotipo.png'
                }
                alt="Nego LOGO"
              />
              <Label color={className ? 'white' : 'black'} fontSize="1.6rem">
                {appName}
              </Label>

              {/* <MenuIconContainer>
              <MenuOutline
                height="35px"
                width="35px"
                color="#FFF"
                onClick={menu ? hideMenu : showMenu}
              />
            </MenuIconContainer> */}
            </div>
          </Link>
          {/*    <label>
                    #1 Business directory
                </label> */}
        </div>
        {/*   open-menu
            close-menu */}
        <Links className={menu ? 'open-menu' : 'close-menu'}>
          {/* <Links className={menu ? 'close-menu' : 'open-menu'}> */}

          <LabelLink blackTheme={className} to="/">
            Inicio
          </LabelLink>

          <LabelLink blackTheme={className} to="/">
            Listado
          </LabelLink>

          <LabelLink blackTheme={className} to="/">
            Categorias
          </LabelLink>

          <LabelLink blackTheme={className} to="/">
            Mi cuenta
          </LabelLink>
        </Links>
      </HeaderContainer>
    </HeaderMainContainer>
  )
}