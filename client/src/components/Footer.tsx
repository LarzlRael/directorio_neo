
import styled from 'styled-components';
import { footerString } from '../strings';

const FooterStyled = styled.footer`
    align-items:center;
    background:#2F3131;
    color:#fff;
    display:flex;
    justify-content:center;
    height:90px;
    margin-top:3rem;
`;


export const Footer = () => {


    const yearCurrently = new Date().getFullYear();

    return (
        <FooterStyled>
            <label>© {yearCurrently} {footerString}</label>
        </FooterStyled>
    )
}
