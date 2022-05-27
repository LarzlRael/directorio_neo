import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { appName } from '../strings'
import { MenuOutline } from 'react-ionicons'
import { sizeMedia } from '../styles/mediaQuerys'
import { primaryColor } from '../context/themeColors'
import { useWindowSize } from '../hooks/useWindows'

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  color: white;
  width: 1000px;
  max-width: 1000px;
  margin: 3rem auto;
  /*  */
  align-items: center;
  transition: 0.3s ease all;

  @media ${sizeMedia('xs_sm')} {
    margin: 0;
    max-width: 100%;
    width: 100%;
    background: ${primaryColor};
    align-items: flex-start;
    flex-direction: column;
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
    z-index: 100;
    margin-top: 1rem;

    &.open-menu {
      transform: translate(0%);
    }
    &.close-menu {
      transform: translate(-130%);
    }
  }
`

const LabelLogo = styled(Link)<{
  fontSize?: string
  show?: boolean
}>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '13px')};
  text-decoration: none;
  display: ${({ show }) => (show ? 'none' : 'block')};
  color: white;

  @media ${sizeMedia('xs_sm')} {
    display: ${({ show }) => (show ? 'none' : 'block')};
    color: white;
    margin-left: 1rem;
  }
`

const LabelLink = styled(Link)`
  font-size: 15px;
  margin: 0 20px;
  font-size: 0.9rem;
  text-decoration: none;
  color: white;

  @media ${sizeMedia('xs_sm')} {
    font-size: 0.9rem;
    margin: 10px 1rem;
    color: white;
  }
`

const MenuIconContainer = styled.div`
  display: none;

  @media ${sizeMedia('xs_sm')} {
    display: block;
    font-size: 1.2rem;
    margin: 10px 1rem;
  }
`

export const Header = () => {
  const [menu, setShowMenu] = useState(false)
  const { windowSize } = useWindowSize()

  const showMenu = () => {
    setShowMenu(true)
  }
  const hideMenu = () => {
    setShowMenu(false)
  }
  useEffect(() => {
    if (windowSize.width < 768) {
      hideMenu()
    } else {
      hideMenu()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize.width])

  const linkClickeable = () => {
    if (windowSize.width <= 768) {
      hideMenu()
    } else {
      return
    }
  }

  return (
    <HeaderContainer>
      <div className="logoContainer">
        <div className="logoName">
          <Link
            to="/"
            style={{
              textDecoration: 'none',
            }}
          >
            <img
              style={{
                height: '35px',
                width: '100px',
              }}
              src="https://res.cloudinary.com/daij4l3is/image/upload/v1649110421/assets/dggjx7ttzzzier7zoqic.png"
              alt="Nego LOGO"
            />
            <LabelLogo fontSize="1.5rem" to="/">
              <span>{appName}</span>
            </LabelLogo>
          </Link>

          <MenuIconContainer>
            <MenuOutline
              height="35px"
              width="35px"
              color="#FFF"
              onClick={menu ? hideMenu : showMenu}
            />
          </MenuIconContainer>
        </div>
      </div>

      <Links className={menu ? 'open-menu' : 'close-menu'}>
        <LabelLink onClick={linkClickeable} to="/">
          Inicio
        </LabelLink>
        <LabelLink to="/" onClick={linkClickeable}>
          Listado
        </LabelLink>{' '}
        <LabelLink to="/" onClick={linkClickeable}>
          Categorias
        </LabelLink>
        <LabelLink to="/" onClick={linkClickeable}>
          Mi cuenta
        </LabelLink>
      </Links>
    </HeaderContainer>
  )
}
