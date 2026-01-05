import styles from "./Return.module.css"
import { IoReturnUpBack } from "react-icons/io5";

type ReturnProps = {
    onClick? : React.MouseEventHandler<HTMLButtonElement>
}

export default function Return({onClick}: ReturnProps){
    return (
        <button className={styles.return} type="button" onClick={onClick}>
            <IoReturnUpBack className={styles.icon}/>
        </button>
    )
}
