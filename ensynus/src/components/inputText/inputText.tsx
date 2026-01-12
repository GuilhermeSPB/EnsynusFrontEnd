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

        <div className="flex flex-col gap-1">
      {label && <label className="font-sans">{label}</label>}

      <div className="flex items-center gap-2 py-[6px] px-1 border-b-2 border-[#f7c948]">
        {Icon && <Icon className="mr-2 text-[#555]" />}

        <input
        className={"flex-1 border-none outline-none bg-transparent text-base text-[#000000]"}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
        
    )
    }

