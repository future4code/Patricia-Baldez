import styled from "styled-components"

export const MovieCardContainer = styled.div`
    border-radius: 10px;
    width: 300px;
    height: 400px;
    margin: 15px;
    position: relative;

    &:hover {
        cursor: pointer;
        box-shadow: rgba(255, 255, 255) 0px 13px 27px -5px, rgba(255, 255, 255) 0px 8px 16px -8px;
    }
`

export const CardImage = styled.img`
    border-radius: 10px;
    /* background-size: cover;
    background-position: center; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-Content: flex-end;

`

export const CardVote = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    width: 2.3em;
    height: 1.5em;
    top: 0;
    right: 0;
    margin-top: -5px;
    margin-right: -10px;
    position: absolute;
    background-color: black;
    color: #fff;
    font-weight: 600;
    border-radius: 5px;
`



