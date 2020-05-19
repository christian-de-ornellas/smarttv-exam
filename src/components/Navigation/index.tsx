import React from "react"
import { AiOutlineSearch, AiFillHome, AiOutlineVideoCamera, AiFillTags, AiOutlineUser } from "react-icons/ai"
import { Navbar, Nav, Item } from "./styles"

const Navigation: React.FC = () => {
    return (
        <Navbar>
            <Nav>
                <AiOutlineSearch />
                <Item>Buscar</Item>
            </Nav>
            <Nav>
                <AiFillHome />
                <Item>Início</Item>
            </Nav>
            <Nav>
                <AiOutlineVideoCamera />
                <Item>Agora na Globo</Item>
            </Nav>
            <Nav>
                <AiFillTags />
                <Item>Categorias</Item>
            </Nav>
            <Nav>
                <AiOutlineUser />
                <Item>Minha Conta</Item>
            </Nav>
        </Navbar>
    )
}

export default Navigation
