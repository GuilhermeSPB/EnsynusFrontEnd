import { useState } from "react"
import { login } from "../../api/auth"
import type { LoginRequest } from "../../types/auth"
import styles from "./Login.module.css"
import Button from "../../components/button/button"
import InputText from "../../components/inputText/inputText"
import { FaEnvelope } from "react-icons/fa"
import { TbLockPassword } from "react-icons/tb"
import { useNavigate } from "react-router-dom"
import Link from "../../components/link/link"
import '../../styles/global.css'


export default function Login(){
const navigate = useNavigate();

const [form, setForm] = useState<LoginRequest>({
    email: "",
    senha: ""
})

async function handleSubmit(e: React.FormEvent){
    e.preventDefault()

    try{
        const response = await login(form)
        response.role === 0 ? navigate("/aluno/menu") : navigate("/professor/menu")

    } catch(error){
        console.error("Erro ao logar", error)
    }
}
    return (
        <div className="flex items-center justify-center box-border
                        min-h-screen w-screen bg-[#2b4c7e]">



        <form className="container" onSubmit={handleSubmit}>

        

        <InputText
        type="email"
        icon={FaEnvelope}
        value={form.email}
        placeholder="Digite seu email"
        onChange={value =>
            setForm({ ...form, email: value})   
        }
        />

        <InputText
        type="password"
        icon={TbLockPassword}
        value={form.senha}
        placeholder="Digite sua senha"
        onChange={value =>
            setForm({ ...form, senha: value})   
        }
        />


        <div className="p-3">
          <Button text="Entrar" type="submit"/>
        </div>
        <div className="flex flex-row p-2 gap-16 text-center">
            <Link texto="Redefinir Senha" path="/redefinir"/>

            <Link texto="Registrar" path="/register"/>
        </div>

        </form>
        </div>
    )
}