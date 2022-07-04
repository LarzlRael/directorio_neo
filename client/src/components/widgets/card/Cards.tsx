import React from 'react'
import Link from 'next/link'
import {
  IoCheckmarkCircle,
  IoLogoFacebook,
  IoLogoInstagram,
} from 'react-icons/io5'

import {
  PymeInterfaceResponse,
  RedesSociales,
} from '../../../interfaces/pymeResponse'
import { Label } from '../../text'
import { capitalizeFirstLetter } from '../../utils/utils'
import Image from 'next/image'

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
      } pointer`}
    >
      {verificado === 'verificado' && (
        <div className="check">
          <IoCheckmarkCircle width="45px" height="45px" color="#5EDD6A" />
        </div>
      )}

      <Link href={`/productos/details/${nombre}`}>
        <Image
          layout="fill"
          className="main-image"
          src={
            urlImages[0]
              ? urlImages[0]
              : '/public/images/no-image.jpeg'
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
        <IoLogoInstagram color="#C13584" height="25px" width="25px" />
      )}
      {nombre === 'Facebook' && (
        <IoLogoFacebook color="#3b5998" height="25px" width="25px" />
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
