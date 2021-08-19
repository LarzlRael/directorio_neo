
import { Indicator } from '../components/Indicator'
import { IconFilterList } from '../components/IconFilter';
import { Cards } from '../components/Cards';
import { useEffect } from 'react';
import { HeaderBlack } from '../components/HeaderBlack';
import styled from 'styled-components';


export const SingleLocation = () => {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = "New tittle";
        return () => {
            document.title = prevTitle;
        }
    }, []);


    return (
        <div >
            <HeaderBlack />

            <Indicator />

            <IconFilterList theme="light" />

            <GridContainer className="cards-container">

                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />

            </GridContainer>
        </div>
    )
}

const GridContainer = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
`;
