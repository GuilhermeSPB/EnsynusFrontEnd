import { useAuth } from "../../contexts/AuthContext"
import {TypeAnimation} from 'react-type-animation';


export type Suggestions = {
  id: string
  label: string
  path: string
}

export type WelcomeAnimationProps = {
    name : string | undefined
    items : Suggestions[]
}

export function WelcomeAnimation({name, items}: WelcomeAnimationProps) {
    return(
    <div className="flex w-full flex-col px-16">
<div className="mt-16">
  <span className="text-[#1e375c] text-5xl font-semibold">
    Bem-vindo <span className="text-[#1e375c]">{name}</span>!
  </span>
<div>
  <span className="mt-4 text-[#1e375c] text-2xl">
    O que deseja fazer hoje?
  </span>
          <TypeAnimation className=" ml-1  text-[#1e375c] border-b-[3px] border-[#f7c948] text-2xl"
        sequence={[
            ...items.flatMap(item => [item.label, 3500, ""]),
        ]}
        speed={70}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        />
        </div>
    </div>
</div>
    )
}