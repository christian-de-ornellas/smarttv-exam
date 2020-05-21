import React from "react"

import { ButtonPrimary } from "./styles"

interface Props {
    label: string
    icon?: any
    onClick?(): void
    variant: string
}

const Button = (props: Props) => {
    const { label, onClick, icon, variant } = props

    if (variant === "primary") {
        ButtonPrimary.defaultProps = {
            theme: {
                bg: "#fff",
                border: "none",
            },
        }
    }
    if (variant === "primary-outline") {
        ButtonPrimary.defaultProps = {
            theme: {
                bg: "transparent",
                border: "#eee",
                color: "#eee",
            },
        }
    }

    return (
        <ButtonPrimary onClick={onClick}>
            {icon}
            {label}
        </ButtonPrimary>
    )
}

export default Button
