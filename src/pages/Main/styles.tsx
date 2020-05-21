import styled from "styled-components"
import backgroudImage from "../../assets/images/bg.jpg"

export const Container = styled.main`
    grid-area: main;
    height: 70vh;
    padding: 4em;
    background-image: url(${backgroudImage});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
export const Title = styled.h1`
    font-size: 1.6em;
    color: #fff;
    width: 500px;
`
export const ButtonGroup = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`
