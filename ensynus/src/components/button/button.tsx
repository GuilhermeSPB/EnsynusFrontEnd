import styles from "./button.module.css"

type ButtonProps = {
    text : string
    type: "button" | "submit"
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({text, type = "button", onClick} : ButtonProps ){
    return (
        <button className={styles.button} type = {type} onClick = {onClick}>
            {text}
        </button>
    )
}