
import type { IconType } from "react-icons"
import {useEffect , useState} from "react";

type AlertValidateProps = {
    text : string
    icon? : IconType
    time : number
}

export default function AlertValidate({text, icon : Icon, time = 3000} : AlertValidateProps) {

  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

   useEffect(() => {
    
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, time);

   
    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, time + 400);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(unmountTimer);
    };
  }, [time]);

  if (!mounted) return null;

    return (
         <div className={`fixed top-5 right-5 z-[9999] min-w-[260px] max-w-[360px] p-4 px-5 
                         bg-[#304458] text-white border border-[#f7c948] border-l-[6px] rounded-lg
                          text-sm font-medium shadow-[0_8px_24px_rgba(0,0,0,0.25)] 
                          ${visible ? 'animate-fade-in-up' : 'animate-fade-out-down'}`}>
      <span className="flex items-center gap-2">
        {Icon && <Icon/>}
        {text}
      </span>
    </div>
    )
}