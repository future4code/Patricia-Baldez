import styled from 'styled-components'

const CardsContainer = styled.div`
    width: 1080px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;

    @media (max-width: 420px){
        width: 100%;
        grid-template-columns: 1fr;
        justify-items: center;      
    }
`


export {
    CardsContainer
}