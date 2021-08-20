
import { Indicator } from '../components/Indicator'
import { IconFilterList } from '../components/IconFilter';
import { Cards } from '../components/Cards';
import { useContext, useEffect } from 'react';
import { HeaderBlack } from '../components/HeaderBlack';
import styled from 'styled-components';
import { PymeContext } from '../context/PymeContext';


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
        console.log(allPymes);
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
                {allPymes.map(({ nombre, urlImages, _id, verificado, redes_sociales }) => (
                    <Cards
                        nombre={nombre}
                        _id={_id}
                        urlImages={urlImages[0]}
                        verificado={verificado}
                        redes_sociales={redes_sociales}
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
