import React from "react"
import { AiOutlineSearch, AiFillHome, AiOutlineVideoCamera, AiFillTags, AiOutlineUser } from "react-icons/ai"
import { Navbar, Nav, Item } from "./styles"

interface Props {
    show: boolean
}

const Navigation = (props: Props) => {
    const { show } = props
    if (show === true) {
        Navbar.defaultProps = {
            theme: { showMenu: "250px" },
        }
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
    } else {
        Navbar.defaultProps = {
            theme: { showMenu: "100px" },
        }
        return (
            <Navbar>
                <Nav>
                    <AiOutlineSearch />
                </Nav>
                <Nav>
                    <AiFillHome />
                </Nav>
                <Nav>
                    <AiOutlineVideoCamera />
                </Nav>
                <Nav>
                    <AiFillTags />
                </Nav>
                <Nav>
                    <AiOutlineUser />
                </Nav>
            </Navbar>
        )
    }
}

export default Navigation
