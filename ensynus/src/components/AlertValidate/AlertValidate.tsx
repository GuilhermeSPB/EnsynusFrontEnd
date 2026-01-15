
import type { IconType } from "react-icons"

type AlertValidateProps = {
    text : string
    icon? : IconType
}

export default function AlertValidate({text, icon : Icon} : AlertValidateProps) {

    return (
         <div className="fixed top-5 right-5 z-[9999] min-w-[260px] max-w-[360px] p-4 px-5 
                         bg-[#304458] text-white border border-[#f7c948] border-l-[6px] rounded-lg
                          text-sm font-medium shadow-[0_8px_24px_rgba(0,0,0,0.25)] animate-fade-in-up">
      <span className="flex items-center gap-2">
        {Icon && <Icon/>}
        {text}
      </span>
    </div>
    )
}