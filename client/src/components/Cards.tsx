import { BagAddOutline, BeakerOutline, EyeOutline } from "react-ionicons"
import { Link } from "react-router-dom";


export const Cards = () => {
    return (
        <div className="single-card flex">
            <Link to="/single-location/information-tecnology/details">
                <img
                className="main-image"
                    src="https://i.pinimg.com/originals/86/b2/52/86b2521ebaa17c8a89f85609809bd9a6.webp"
                    alt=""
                />
            </Link>
            <div className="contenido">

                <label style={{
                    display: 'block',
                    marginBottom: '1rem',
                    fontWeight: 500,
                    fontSize: '18px',
                }}>The British Museum</label>

                <LabelAndIcon icon={
                    <BagAddOutline
                        color="#7a82a6"
                        height="20px"
                        width="20px"
                    />
                }
                    label="Informacion"
                />
                <LabelAndIcon icon={
                    <BagAddOutline
                        color="#7a82a6"
                        height="20px"
                        width="20px"
                    />
                }
                    label="De contacto"
                />

                <div className="info-card flex">
                    <LabelAndIcon icon={
                        <BeakerOutline
                            color="#7a82a6"

                            height="20px"
                            width="20px"
                        />
                    }
                        label="Historial +1"
                    />

                    <LabelAndIcon icon={
                        <EyeOutline
                            color="#7a82a6"
                            height="18px"
                            width="18px"
                        />
                    }
                        label="1200"
                    />

                </div>

            </div>


        </div>

    )
}

interface Props {
    icon: any,
    label: string,

};
const LabelAndIcon = ({ icon, label }: Props) => {

    return (
        <div style={{
            marginBottom: '0.5rem',
            display: 'flex',
            alignContent: 'center'

        }}>

            {icon}
            <label style={{
                marginLeft: '1rem',
                color: '#7a82a6',
                fontSize: '0.9rem',
            }}>{label}</label>
        </div>
    )
}