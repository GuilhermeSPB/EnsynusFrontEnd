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
import AlertValidate from "../../components/AlertValidate/AlertValidate"

export default function Register(){

type RegisterStep = "BASIC" | "RESPONSAVEL"

const [step, setStep] = useState<RegisterStep>("BASIC")




    const [showAlert, setShowAlert] = useState(false)

    const [form, setForm] = useState<RegisterRequest>({

        nome: "",
        email: "",
        senha: "",
        dataNasc: "",
        role: 
        -1,

        //Dados não obrigatórios
        nomeResp: null,
        emailResp: null
    })

    async function testarEntrada(e:React.FormEvent){
        e.preventDefault()
        console.log(form)
    }

    function handleNext(e: React.FormEvent){
        e.preventDefault

        if(form.role === 0){
            setStep("RESPONSAVEL")
            return
        }

        handleSubmit(e);
    }

    function maioridadeChecker(dataNasc : string): boolean{
        
        if(!dataNasc) return false
        
        const hoje = new Date()
        const nascimento = new Date(dataNasc)

        let idade = hoje.getFullYear() - nascimento.getFullYear()

        const mesAtual = hoje.getMonth()
        const mesNasc = nascimento.getMonth()
        
        if(
            mesAtual < mesNasc || (mesAtual === mesNasc && hoje.getDate() < nascimento.getDate())
        ) {
            idade --
        }
        return idade >= 18
    }

function showAlertTemporarily() {
   setShowAlert(true)

  setTimeout(() => {
    setShowAlert(false)
  }, 4500)
}

    function validate(): boolean{
        var isValid = true;

        if(!form.nome.trim()) isValid = false;
        if(!form.email.trim()) isValid = false;
        if(!form.senha.trim()) isValid = false;
        if(!form.dataNasc.trim()) isValid = false;
        if( form.role === -1 ) isValid = false;  

        if(!isValid){
            showAlertTemporarily()
        }

        return isValid;
    }

    async function handleSubmit(e:React.FormEvent) {
        e.preventDefault()
        testarEntrada(e)
        if(validate()){
            try{
                const response = await register(form)
                console.log(response.token)    
            } catch(error){
                console.error("Erro ao registrar", error)
            }
        }
    }

    
    return (
        
    <div className={styles.container}>

    {showAlert && (
      <AlertValidate
        text="Campos obrigatórios não preenchidos"
        icon={TbLockPassword}
      />
      
    )}

        <form className={styles.form} onSubmit={handleNext}>
    {step === "BASIC" && (
    <>
    <div style={{ display: "flex" , flexFlow: "row"}}>
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

            <Button text="Registrar" type="button" onClick={handleNext} />
        </>
        )}
        {step === "RESPONSAVEL" &&(
            <>
            <InputText
                type="text"
                icon={FaPerson}
                value={form.nomeResp ??  ""}
                placeholder="Digite o nome de seu responsável"
                onChange={value =>
                    setForm({ ...form, nomeResp: value})   
                }
                />

            <br/>

            <InputText
                type="email"
                icon={FaEnvelope}
                value={form.emailResp ?? ""}
                placeholder="Digite o email de seu responsável"
                onChange={value =>
                    setForm({ ...form, emailResp: value})   
                }
                />
            <br/>
             <Button text="Registrar" type="submit" onClick={handleSubmit} />
            </>
        )}
        </form>

    </div>
    )

}