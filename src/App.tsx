import React, { useState } from "react"
import styled from "styled-components"

const View = styled.div`
    padding: 4em;
    background: papayawhip;
`
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`
const Button = styled.button`
    border: none;
    background: blue;
    color: "#fff";
    padding: 0.4rem 1rem;
    cursor: pointer;
`

const App = () => {
    const [saudation, setSaudation] = useState("é inicial")

    const change = () => setSaudation("Mudou")

    return (
        <View>
            <Title>Meu estado {saudation}</Title>
            <Button onClick={change}>Trocar</Button>
        </View>
    )
}
export default App
