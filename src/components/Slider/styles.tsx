import styled from "styled-components"

export const Container = styled.aside`
    background: #999;
    grid-area: aside;
    overflow-x: scroll;
    display: grid;
    grid-auto-flow: column;
`

export const Item = styled.div`
    width: 320px;
    height: 100px;
    margin: 0.4rem;
    background: #ddc885;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
