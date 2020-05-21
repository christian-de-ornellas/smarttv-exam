import React from "react"
import { Container, Title, ButtonGroup } from "./styles"
import Button from "../../components/Button"
import { FaPlay } from "react-icons/fa"
import Logo from "../../assets/images/logo.png"

const Style = {
    logo: {
        width: "250px",
    },
}

const Main: React.FC = () => {
    return (
        <Container>
            <img src={Logo} style={Style.logo} alt="Logo" />
            <Title>Acompanhe 24 horas por dia a casa mais vigiada do Brasil</Title>
            <ButtonGroup>
                <Button label="Assista" icon={<FaPlay />} onClick={() => alert("Assista")} variant="primary" />
                <Button label="Veja mais" onClick={() => alert("Veja mais")} variant="primary-outline" />
            </ButtonGroup>
        </Container>
    )
}

export default Main
