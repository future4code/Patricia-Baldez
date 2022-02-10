import styled from "styled-components";

export const ContainerError = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1{
        font-size: 3rem;
        margin: 1rem;
    }
    button{
        padding: 0.8rem 3rem 0.8rem 2rem;
        color: white;
        background-color:#00b8e2;
        border: solid #00b8e2 2px;
        font-size: 1rem;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
        margin: 0%.5rem;
        :hover{
            background-color: white;
            color:  #00b8e2;
        }
    }
`