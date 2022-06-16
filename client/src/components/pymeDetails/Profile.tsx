<<<<<<< HEAD
import React from 'react';
import {
  IoHeart,
  IoMailOutline,
  IoLogoFacebook,
  IoLogoWhatsapp,
  IoLogoInstagram,
} from 'react-icons/io5'
import { RedesSociales } from '../../interfaces/pymeResponse'

interface ProfileProps {
  nombre?: string
  urlNegocio?: string
  propietario?: string
  urlProfile?: string
  redesSociales?: RedesSociales[]
=======
import {
  Heart,
  MailOutline,
  LogoFacebook,
  LogoWhatsapp,
  LogoInstagram,
} from 'react-ionicons'
import {
  PymeInterfaceResponse,
  RedesSociales,
} from '../../interfaces/pymeResponse'
import ToolTip from '../boxes/ToolTip'
import { Span } from '../text'
import { H2 } from '../text/H2'
import { Label } from '../text/Label'
import { capitalizeFirstLetter } from '../utils/utils'

interface ProfileProps {
  pyme: PymeInterfaceResponse
>>>>>>> origin/dev
}
export const Profile = ({
  pyme: {
    nombre,
    urlNegocio,
    propietario,
    profileImage,
    redes_sociales,
    departamento,
  },
}: ProfileProps) => {
  return (
    <div className="informationPlace">
      <div className="information">
        <div>
          <H2
            fontSize="18px"
            fontWeight="500"
            textAlign="start"
            /* color: $title-color; */
            margin=" 0 0 0 1rem"
          >
            Información de autor
          </H2>
        </div>

<<<<<<< HEAD
export const Profile = ({
  nombre,
  urlNegocio,
  propietario,
  urlProfile,
  redesSociales,
}: ProfileProps) => {
  return (
    <div className="informationPlace">
      <div className="information">
        <div>
          <label className="title-content">Informacion de autor</label>
        </div>

        <div className="border-box profile">
          <div className="heart pointer">
            <IoHeart width="40px" height="40px" color="#ED4956" />
=======
        <div className="border-box profile">
          <div className="heart pointer">
            <Heart width="40px" height="40px" color="#ED4956" />
>>>>>>> origin/dev
            {/*  <Recaptcha
                                    sitekey="6LeNLlwbAAAAAIcmdcPPXIlukfpWeRN0bNOT7_xo"
                                    render="explicit"
                                /> */}
          </div>

          <div className="info-profile flex">
            <div className="image">
              <img
                src={
<<<<<<< HEAD
                  urlProfile
                    ? urlProfile
=======
                  profileImage
                    ? profileImage
>>>>>>> origin/dev
                    : 'https://cdn.iconscout.com/icon/premium/png-256-thumb/profile-1506810-1278719.png'
                }
                style={{
                  borderRadius: '100%',
                  height: '60px',
                  width: '60px',
                  marginRight: '0.5rem',
                }}
                alt="profile"
              />
            </div>

            <div className="nameAndCategory">
<<<<<<< HEAD
              <label htmlFor="">{nombre}</label>
              <p
                style={{
                  fontSize: '14px',
                }}
              >
                Miembro desde hace 1 año
              </p>
            </div>
          </div>
          <div className="contact">
            <div className="icon flex">
              <IoMailOutline width="20px" height="20px" />
              <label
                style={{
                  marginLeft: '0.5rem',
                }}
              >
                {urlNegocio ? urlNegocio : 'Todavia no hay Url we'}
              </label>
            </div>
            <a
              href="https://demo.directorist.com/plugin/demo-one/directory/the-british-museum/"
=======
              <Label fontSize="1.2rem" fontWeight="550">
                {capitalizeFirstLetter(nombre)}
              </Label>

              <Label
                fontSize="1.1rem"
                fontWeight="400"
                display="block"
                textAlign="start"
              >
                {departamento}
              </Label>
              <Span fontSize="14px">Miembro desde hace 1 año</Span>
            </div>
          </div>
          <div className="contact">
            <div className="icon flex">
              <MailOutline width="20px" height="20px" />
              <Label margin="0 0 0 .5rem">
                <a
                  style={{
                    textDecoration: 'none',
                    color: '#000',
                    fontSize: '15px',
                  }}
                  href={urlNegocio ?? urlNegocio}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {urlNegocio ?? urlNegocio}
                </a>
              </Label>
            </div>
            <a
              href="#"
>>>>>>> origin/dev
              style={{
                textDecoration: 'none',
                color: '#202428',
              }}
            >
              {propietario ? propietario : 'Propietario'}
            </a>

            <div
              className="social-media flex pointer"
              style={{
                marginTop: '1rem',
                justifyContent: 'space-evenly',
              }}
            >
<<<<<<< HEAD
              {redesSociales?.map(({ nombre, _id, urlRedSocial }) => (
                <SocialLink
                  nombre={nombre}
                  _id={_id}
                  key={_id}
                  urlRedSocial={urlRedSocial}
                />
=======
              {redes_sociales?.map((redSocial) => (
                <SocialLink key={redSocial._id} {...redSocial} />
>>>>>>> origin/dev
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SocialLink = ({ nombre, urlRedSocial }: RedesSociales) => {
  switch (nombre) {
    case 'Instagram':
      return (
<<<<<<< HEAD
        <a href={urlRedSocial} target="_blank" rel="noopener noreferrer">
          <IoLogoInstagram color="#C13584" width="35px" height="35px" />
        </a>
      )
    case 'Facebook':
      return (
        <a href={urlRedSocial} target="_blank" rel="noopener noreferrer">
          <IoLogoFacebook color="#3b5998" width="35px" height="35px" />
        </a>
      )
    case 'Whatsapp':
      return <IoLogoWhatsapp color="#25D366" width="35px" height="35px" />
=======
        <ToolTip content="Instagram" theme="dark">
          <a href={urlRedSocial} target="_blank" rel="noopener noreferrer">
            <LogoInstagram color="#C13584" width="35px" height="35px" />
          </a>
        </ToolTip>
      )
    case 'Facebook':
      return (
        <ToolTip content="Facebook" theme="dark">
          <a href={urlRedSocial} target="_blank" rel="noopener noreferrer">
            <LogoFacebook color="#3b5998" width="35px" height="35px" />
          </a>
        </ToolTip>
      )
    case 'Whatsapp':
      return (
        <ToolTip content="Whatsapp">
          <LogoWhatsapp color="#25D366" width="35px" height="35px" />
        </ToolTip>
      )
>>>>>>> origin/dev

    default:
      return <> </>
  }
}
