import { useState } from "react"
import { login } from "../../api/auth"
import type { LoginRequest } from "../../types/auth"
import styles from "./Login.module.css"
import Button from "../../components/button/button"
import InputText from "../../components/inputText/inputText"
import { FaEnvelope } from "react-icons/fa"
import { TbLockPassword } from "react-icons/tb"

export default function Login(){

const [form, setForm] = useState<LoginRequest>({
    email: "",
    senha: ""
})

async function handleSubmit(e: React.FormEvent){
    e.preventDefault()

    try{
        const response = await login(form)
        console.log(response.token)
    } catch(error){
        console.error("Erro ao logar", error)
    }
}
    return (
        <div className={styles.container}>



        <form className={styles.form} onSubmit={handleSubmit}>


        <InputText
        type="email"
        icon={FaEnvelope}
        value={form.email}
        placeholder="Digite seu email"
        onChange={value =>
            setForm({ ...form, email: value})   
        }
        />


<br/>

        <InputText
        type="password"
        icon={TbLockPassword}
        value={form.senha}
        placeholder="Digite sua senha"
        onChange={value =>
            setForm({ ...form, senha: value})   
        }
        />

        <br/>
          <Button text="Entrar"/>
        </form>
        </div>
    )
}