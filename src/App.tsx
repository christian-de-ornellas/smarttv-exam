import React, { useState } from "react"
import Main from "./pages/Main"
import Navigation from "./components/Navigation"
import Slider from "./components/Slider"
import { Container } from "./styles"

const App: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleEnterMenu = () => setShowMenu(true)
    const handleLeaveMenu = () => setShowMenu(false)

    return (
        <Container>
            <div onMouseEnter={handleEnterMenu} onMouseLeave={handleLeaveMenu}>
                <Navigation show={showMenu} />
            </div>
            <Main />
            <Slider />
        </Container>
    )
}
export default App
