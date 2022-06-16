<<<<<<< HEAD
import React from 'react';
import { IoCallOutline, IoMailOutline } from 'react-icons/io5';
=======
import { CallOutline, MailOutline } from 'react-ionicons'
import { Label } from '../text'
import { CardDescription } from '../widgets/card'
>>>>>>> origin/dev

interface ContactProps {
  telefono: string | undefined
  email: string | undefined
}

export const ContacInfo = ({ telefono, email }: ContactProps) => {
<<<<<<< HEAD
    return (
        <div className="border-box contact-information">
            <label className="title-content">
                Informacion de contacto
            </label>
            {telefono &&
                <ContactInfo
                    icon={
                        <IoCallOutline
                            width="20px"
                            height="20px"
                        />
                    }
                    title="Telefono"
                    contactInfo={telefono}
                />
            }


            {email &&
                <ContactInfo
                    icon={
                        <IoMailOutline
                            width="20px"
                            height="20px"
                        />
                    }
                    title="Email"
                    contactInfo={email}
                />
            }

        </div>
    )
=======
  return (
    <CardDescription
      title="Informacion de contacto"
      className="contact-information"
    >
      {telefono && (
        <ContactInfo
          icon={<CallOutline width="20px" height="20px" />}
          title="Telefono"
          contactInfo={telefono}
        />
      )}

      {email && (
        <ContactInfo
          icon={<MailOutline width="20px" height="20px" />}
          title="Email"
          contactInfo={email}
        />
      )}
    </CardDescription>
  )
>>>>>>> origin/dev
}

interface Props {
  title: string
  contactInfo: string
  icon: any
}
export const ContactInfo = ({ title, contactInfo, icon }: Props) => {
  return (
    <div className="flex info-category">
      <div className="flex icon-info">
        {/* Icon from ionIcons */}
        {icon}
        <Label margin="0 0 0 .5rem">{title}</Label>
      </div>

      <Label htmlFor="">{contactInfo}</Label>
    </div>
  )
}
