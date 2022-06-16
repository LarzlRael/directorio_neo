import { CheckmarkCircle, LogoFacebook, LogoInstagram } from 'react-ionicons'
import { Link } from 'react-router-dom'
import {
  PymeInterfaceResponse,
  RedesSociales,
} from '../../../interfaces/pymeResponse'
import { Label } from '../../text'
import { capitalizeFirstLetter } from '../../utils/utils'

export const Cards = ({
  nombre,
  urlImages,
  redes_sociales,
  verificado,
  _id,
}: PymeInterfaceResponse) => {
  return (
    <div
      className={`single-card flex ${
        verificado === 'verificado' && 'verificado'
      }`}
    >
      {verificado === 'verificado' && (
        <div className="check">
          <CheckmarkCircle width="45px" height="45px" color="#5EDD6A" />
        </div>
      )}

      <Link to={`/productos/confecciones/${nombre}`}>
        <img
          className="main-image"
          src={
            urlImages[0]
              ? urlImages[0]
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5mpvN1d5PpiB_WBM_XZcr-m2fP1r1kGwbaMXNwOuSpCeNmh95WBTjFwiUaECoWX0oLI&usqp=CAU'
          }
          alt={nombre}
        />
      </Link>
      <div className="contenido">
        <Label
          display="block"
          margin="0 0 1rem 0"
          fontWeight="bold"
          fontSize="18px"
          textAlign="start"
        >
          {capitalizeFirstLetter(nombre)}
        </Label>

        {redes_sociales?.map((red_social) => (
          <LabelAndIcon {...red_social} />
        ))}
      </div>
    </div>
  )
}

const LabelAndIcon = ({ nombre, urlRedSocial }: RedesSociales) => {
  return (
    <div
      style={{
        marginBottom: '0.5rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {nombre === 'Instagram' && (
        <LogoInstagram color="#C13584" height="25px" width="25px" />
      )}
      {nombre === 'Facebook' && (
        <LogoFacebook color="#3b5998" height="25px" width="25px" />
      )}

      <a
        href={urlRedSocial}
        target="_blank"
        style={{
          textDecoration: 'none',
          marginLeft: '1rem',
          color: '#7a82a6',
          fontSize: '0.9rem',
        }}
        rel="noreferrer"
      >
        {nombre}
      </a>
    </div>
  )
}
