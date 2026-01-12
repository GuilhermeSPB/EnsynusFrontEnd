import styles from "./Return.module.css"
import { IoReturnUpBack } from "react-icons/io5";

type ReturnProps = {
    onClick? : React.MouseEventHandler<HTMLButtonElement>
}

export default function Return({onClick}: ReturnProps){
    return (
        <button className="absolute top-4 left-4 p-[10px] rounded-lg border-none cursor-pointer bg-[#f7c948] text-black
        transform transition-all duration-150 ease-out hover:bg-[#ffd45f] hover:-translate-y-px 
        hover:shadow-lg active:translate-y-0 active:shadow-md focus:outline-none"
        type="button" onClick={onClick}>
            <IoReturnUpBack className="flex items-center gap-2"/>
        </button>
    )
}
