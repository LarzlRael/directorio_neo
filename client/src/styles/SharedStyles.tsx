import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const LinkStyled = styled(Link) <{ theme?: boolean }>`
    color: ${({ theme }) => theme === 'dark' ? 'white' : 'black'};
    text-decoration:none;
`;