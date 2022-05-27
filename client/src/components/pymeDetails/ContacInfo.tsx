import { CallOutline, MailOutline } from 'react-ionicons'
import { Label } from '../text'
import { CardDescription } from '../widgets/card'

interface ContactProps {
  telefono: string | undefined
  email: string | undefined
}

export const ContacInfo = ({ telefono, email }: ContactProps) => {
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
