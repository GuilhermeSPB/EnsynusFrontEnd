import { useNavigate } from "react-router-dom"

type LinkProps = {
    texto : string
    path : string

}

export default function Link({
    texto,
    path
} : LinkProps){
    const navigation = useNavigate();
    return(
        <div>
            <button type="button" className=" text-[#000000] text-sm border-b-2 border-[#f7c948;]"
             onClick={() => navigation(path)}>{texto}</button>
        </div>
    )
}