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

        <div className="border-box profile">
          <div className="heart pointer">
            <Heart width="40px" height="40px" color="#ED4956" />
            {/*  <Recaptcha
                                    sitekey="6LeNLlwbAAAAAIcmdcPPXIlukfpWeRN0bNOT7_xo"
                                    render="explicit"
                                /> */}
          </div>

          <div className="info-profile flex">
            <div className="image">
              <img
                src={
                  profileImage
                    ? profileImage
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
              {redes_sociales?.map((redSocial) => (
                <SocialLink key={redSocial._id} {...redSocial} />
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

    default:
      return <> </>
  }
}
