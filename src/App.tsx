import React, { useState, useEffect, useRef } from "react"
import Main from "./pages/Main"
import Navigation from "./components/Navigation"
import Slider from "./components/Slider"
import { Container } from "./styles"

const App: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleEnterMenu = () => setShowMenu(true)
    const handleLeaveMenu = () => setShowMenu(false)

    const useKey = (key: any, cb: any) => {
        const callbackRef = useRef(cb)
        useEffect(() => {
            callbackRef.current = cb
        })

        useEffect(() => {
            const handle = (event: any) => {
                if (event.code === key) {
                    callbackRef.current(event)
                }
            }
            document.addEventListener("keypress", handle)
            return () => document.removeEventListener("keypress", handle)
        }, [key])
    }

    function handleKeyMenu() {
        if (showMenu === true) {
            setShowMenu(false)
        } else {
            setShowMenu(true)
        }
    }
    useKey("KeyM", handleKeyMenu)

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
