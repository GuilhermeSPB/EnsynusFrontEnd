import styles from "./alertValidate.module.css"
import type { IconType } from "react-icons"

type AlertValidateProps = {
    text : string
    icon? : IconType
}

export default function AlertValidate({text, icon : Icon} : AlertValidateProps) {

    return (
         <div className={styles.container}>
      <span className={styles.text}>
        {Icon && <Icon className={styles.icon} />}
        {text}
      </span>
    </div>
    )
}