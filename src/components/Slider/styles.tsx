import styled from "styled-components"
import Thumb from "../../assets/images/thumb.jpg"

export const Container = styled.aside`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #111;
    padding-left: 6rem;
`

export const Place = styled.p`
    color: #fff;
    text-shadow: 1px 1px 1px #000;
`

export const Item = styled.div`
    width: 320px;
    height: 110px;
    margin: 0.8rem;
    background: #ddc885;
    display: flex;
    padding-left: 1rem;
    align-items: flex-end;
    background-image: url(${Thumb});
    background-position: center;
    background-repeat: repeat;
    background-size: 100%;
`
