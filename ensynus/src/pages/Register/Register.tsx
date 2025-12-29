import { useState } from "react"
import { register } from "../../api/auth"
import type { RegisterRequest } from "../../types/auth"
import InputText from "../../components/inputText/inputText"
import Button from "../../components/button/button"
import { FaPerson } from "react-icons/fa6"
import styles from "./Register.module.css"
import { FaEnvelope } from "react-icons/fa"
import { TbLockPassword } from "react-icons/tb"
import Radio from "../../components/radio/Radio"

export default function Register(){

    const [form, setForm] = useState<RegisterRequest>({

        nome: "",
        email: "",
        senha: "",
        dataNasc: "",
        role: -1,

        //Dados não obrigatórios
        nomeResp: null,
        emailResp: null
    })

    async function handleSubmit(e:React.FormEvent) {
        e.preventDefault()
        
        try{
            const response = await register(form)
            console.log(response.token)    
        } catch(error){
            console.error("Erro ao registrar", error)
        }
    }

    return (
        
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>

    <div style={{ flexFlow: "row"}}>
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

        <InputText
                type="text"
                icon={FaPerson}
                value={form.nome}
                placeholder="Digite seu nome"
                onChange={value =>
                    setForm({ ...form, nome: value})   
                }
                />

            <br/>

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

        <InputText
                type="date"
                label="Data de nascimento:"
                value={form.dataNasc}

                onChange={value =>
                    setForm({ ...form, dataNasc: value})   
                }
                />

            <br/>

            <Button text="Registar"/>
        </form>

    </div>
    )

}