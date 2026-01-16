import { useState } from "react"
import type { LoginRequest } from "../../types/Auth"
import Radio from "../../components/radio/Radio"
import AlertValidate from "../../components/AlertValidate/AlertValidate"
import Button from "../../components/button/button"
import InputText from "../../components/inputText/inputText"
import { FaEnvelope } from "react-icons/fa"
import { TbLockPassword } from "react-icons/tb"
import { useNavigate } from "react-router-dom"
import Link from "../../components/link/link"
import logo from "../../img/logo.jpg"
import '../../styles/global.css'
import { useAuth } from "../../contexts/AuthContext"


export default function Login(){
const navigate = useNavigate();

const [form, setForm] = useState<LoginRequest>({
    email: "",
    senha: "",
    role: -1,
})

const [showAlert, setShowAlert] = useState(false)
const [textAlert, setTextAlert] = useState("");


function showAlertTemporarily(text : string) {
   setTextAlert(text)
   setShowAlert(true)

  setTimeout(() => {
    setShowAlert(false)
  }, 4500)
}

function validate(): boolean{

        var isValid = true;

        if(!form.email.trim()) isValid = false;
        if(!form.senha.trim()) isValid = false;


        if(!isValid){
            showAlertTemporarily("Campos obrigatórios não preenchidos.")
        }

        return isValid;
    }


const { login } = useAuth();

async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    if(validate()){
        try{
            await login(form)

        } catch(error){
            console.error("Erro ao logar", error)
        }
    }
}
    return (

        


        <div className="flex items-center justify-center box-border
                        min-h-screen w-screen bg-[#2b4c7e]">

        

        {showAlert && (
            <AlertValidate
                text={textAlert}
                icon={TbLockPassword}
            />
            
            )}

        <form className="container" onSubmit={handleSubmit}>

        <img src={logo} alt="Logo" className="rounded-lg size-1/3 mb-5"/>
        

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

<div className="flex flex-row mt-2">
        <Radio
            name="role"
            value={0}
            label="Aluno"
            checked = {form.role === 0}
            onChange={value =>
                    setForm({ ...form, role: value})   
                }
        />

        <Radio
            name="role"
            value={1}
            label="Professor"
            checked = {form.role === 1}
            onChange={value =>
                    setForm({ ...form, role: value})   
                }
        />

    </div>



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