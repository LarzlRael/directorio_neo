
import { Indicator } from '../components/Indicator'
import { IconFilterList } from '../components/IconFilter';
import { Cards } from '../components/Cards';
import { useContext, useEffect } from 'react';
import { HeaderBlack } from '../components/HeaderBlack';
import styled from 'styled-components';
import { PymeContext } from '../context/PymeContext';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'


export const SingleLocation = () => {

    const { allPymes, getAllPymes } = useContext(PymeContext);
    useEffect(() => {
        const prevTitle = document.title;
        document.title = "New tittle";
        return () => {
            document.title = prevTitle;
        }
    }, []);
    useEffect(() => {
        getAllPymes();
    }, []);



    return (
        <div >
            <HeaderBlack />

            <Indicator />

            <IconFilterList theme="light" />

            <GridContainer className="cards-container">

                {/* <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards /> */}
                {/*                 {allPymes.map(({ nombre, urlImages, _id, verificado, redes_sociales }) => ( */}
                {allPymes.map((pyme) => (
                    <Cards
                        {...pyme}
                        key={uuidv4()}

                    />
                ))}

            </GridContainer>
        </div>
    )
}

const GridContainer = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
`;
