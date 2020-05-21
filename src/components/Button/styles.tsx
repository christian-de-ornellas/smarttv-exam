import styled from "styled-components"

export const ButtonPrimary = styled.button`
    border: none;
    outline: none;
    border: 1px solid ${(props) => props.theme.border};
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.color};
    padding: 0.8rem 2rem;
    margin: 0.2rem;
    border-radius: 10px;
    display: flex;
    align-items: center;

    cursor: pointer;
    &:hover {
        transition: all linear 0.2s;
        box-shadow: 0 0 10px 0 #000;
    }
`
