import styled from "styled-components"

export const Navbar = styled.nav`
    background: #000;
    width: ${(props) => props.theme.showMenu};
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    position: absolute;
    transition: all linear 0.2s;
`
export const Nav = styled.ul`
    list-style: none;
    color: #fff;
    display: flex;
    align-content: center;
    align-items: center;

    &:hover {
        background: #999;
        cursor: pointer;
    }
`

export const Item = styled.li`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 1rem;
`
