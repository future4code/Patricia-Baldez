import styled from 'styled-components'

const ContainerVideo = styled.section`
    width: 1240px;
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 240px 760px 240px;
    padding: 20px 10px;

    @media (max-width: 420px){
       display: flex;
       flex-direction: column;
    }
`

const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;

    div{
        display: flex;
    }
`
export{
    ContainerVideo,
    CardInfo
}
