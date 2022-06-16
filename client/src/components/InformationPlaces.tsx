import React from 'react';
import styled from 'styled-components';
import { sizeMedia } from '../styles/mediaQuerys';
import { LinkStyled } from '../styles/SharedStyles';


export interface InformationPlacesI {
    title: string;
    backGroundImage?: string;
    icon: string;
}
interface Props {
    places: InformationPlacesI[];
    title: string;
    subtitle: string;
};
interface PropsInfor {
    place: InformationPlacesI;
};


const CardInformation = styled.div`
    align-items:center;
    background: rgba(255,255,255,0.1);
    cursor:pointer;
    display:flex;
    flex-direction:column;
    justify-content:center;
    height: 250px;
    position: relative;
    width:100%;
    z-index: 1;

    @media ${sizeMedia('sm')} {
        width:100%;
    }
`;


const Label = styled.label<{
    fontSize?: string,
    color?: string,
    marginTop?: string,
    marginbottom?: string,
    bold?: boolean,
}>`
    color: ${({ color }) => color ? color : '#292828'};
    font-size:${({ fontSize }) => fontSize};
    display:block;
    text-align: center;
    margin-top:${({ marginTop }) => marginTop};
    margin-bottom:${({ marginbottom }) => marginbottom};
    font-weight:${({ bold }) => bold && 'bold'};
    
`;
const Icon = styled.i`
    color: white;
    font-size: 25px;
`;
const Line = styled.div`
    border: solid 0.1px rgba(0,0,0,.2);
    margin-top: 4rem;
    margin-bottom: 1rem;
    
`;
const ImageBrackGround = styled.div<{
    background: string,
}>`
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(${({ background }) => background}) center / cover;
    background-size: cover;
    opacity: .9;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    
`;


export const InformationPlaces = ({ places, title, subtitle }: Props) => {
    return (
        <div className="infomationContainer">
            <Label
                fontSize="2rem"
                marginTop="4rem"
                marginbottom="1rem"
                bold
            >{title}</Label>
            <Label
                fontSize="1rem"
                marginbottom="1rem"
                bold>
                {subtitle}</Label>

            <div className="informationGrids">
                {places.map((place, i) => (
                    <InformationCard key={i} place={place} />
                ))}
            </div>

            <Line />

        </div>
    )
}

export const InformationCard = ({ place: { title, backGroundImage, icon } }: PropsInfor) => {

    const convertSlug = (): string => {
        return title.replace(' ', '-').toLowerCase();
    }

    return (
        <LinkStyled to={{
            pathname: `/productos/${convertSlug()}`,
            state: {
                backGroundImage
            }
        }}>
            <CardInformation>

                <ImageBrackGround
                    background={backGroundImage!}
                />
                <Icon className={icon} />
                <Label
                    color="white"
                    fontSize="18px"
                    marginTop="10px"
                    htmlFor="">{title}</Label>

            </CardInformation>
        </LinkStyled>
    )
}
