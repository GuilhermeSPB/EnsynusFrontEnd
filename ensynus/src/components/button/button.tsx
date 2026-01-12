


type ButtonProps = {
    text : string
    type: "button" | "submit"
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({text, type = "button", onClick} : ButtonProps ){
    return (
        <button className="
  inline-block p-[10px] rounded-lg border-none cursor-pointer bg-[#f7c948] text-black text-b font-medium 
  transform transition-all duration-150 ease-out hover:bg-[#ffd45f] hover:-translate-y-1 
  hover:shadow-lg active:translate-y-0 active:shadow-md focus:outline-none"
  type = {type} onClick = {onClick}>
            {text}
        </button>
    )
}
