import styled from "styled-components";

export const ContainerHeader = styled.header`
    background-color:  #00b8e2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
`
export const Form = styled.form`

`
export const Input = styled.input`
    margin: 0%.5rem;
    padding: 1rem;
    border: none ;
    outline: none ;
   
`

export const Button = styled.button`
    padding: 0.8rem 3rem 0.8rem 2rem;
    color: white;
    background-color: transparent;
    border: solid white 2px;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    margin: 0%.5rem;
    :hover{
        background-color: white;
        color:  #00b8e2;
    }
`