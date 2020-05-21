import React from "react"
import { Container, Item, Place } from "./styles"

const Slider: React.FC = () => {
    return (
        <Container>
            <Item>
                <Place>Sala de Estar</Place>
            </Item>
            <Item>
                <Place>Varanda</Place>
            </Item>
            <Item>
                <Place>Piscina</Place>
            </Item>
            <Item>
                <Place>Academia</Place>
            </Item>
            <Item>
                <Place>Chuveiro</Place>
            </Item>
        </Container>
    )
}

export default Slider
