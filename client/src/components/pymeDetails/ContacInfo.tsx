import { CallOutline, MailOutline } from 'react-ionicons'
import { Label } from '../text'
import { H2 } from '../text/H2'

interface ContactProps {
  telefono: string | undefined
  email: string | undefined
}

export const ContacInfo = ({ telefono, email }: ContactProps) => {
  return (
    <div className="border-box contact-information">
      <H2
        fontSize="18px"
        fontWeight="500"
        textAlign="start"
        /* color: $title-color; */
        margin=" 0  0 1rem 0 "
      >
        Informacion de contacto
      </H2>
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
    </div>
  )
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
