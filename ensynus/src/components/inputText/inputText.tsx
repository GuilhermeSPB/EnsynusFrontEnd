import styles from "./inputText.module.css"
import type { IconType } from "react-icons"

type InputTextProps = {
    label? : string
    icon? : IconType
    type?: string
    value : string
    placeholder? : string
    onChange:  (value : string ) => void
}

export default function InputText({
    label,
    icon : Icon,
    type,
    value,
    placeholder,
    onChange} : InputTextProps) {

        return (

        <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.inputWrapper}>
        {Icon && <Icon className={styles.icon} />}

        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
        
    )
    }

