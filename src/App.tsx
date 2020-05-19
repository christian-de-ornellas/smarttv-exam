import React from "react"
import Main from "./pages/Main"
import Navigation from "./components/Navigation"
import Slider from "./components/Slider"
import styled from "styled-components"

const Container = styled.div`
    display: grid;
    grid-template-columns: 200px 11fr;
    grid-template-rows: auto;
    grid-template-areas:
        "nav main"
        "nav aside";
`

const App: React.FC = () => {
    return (
        <Container>
            <Navigation />
            <Main />
            <Slider />
        </Container>
    )
}
export default App
