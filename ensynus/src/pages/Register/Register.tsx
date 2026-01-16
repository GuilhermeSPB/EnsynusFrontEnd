import { useState } from "react"
import { register } from "../../api/auth"
import type { RegisterRequest } from "../../types/Auth"
import InputText from "../../components/inputText/inputText"
import Button from "../../components/button/button"
import { FaPerson } from "react-icons/fa6"
import { FaEnvelope } from "react-icons/fa"
import { TbLockPassword } from "react-icons/tb"
import Radio from "../../components/radio/Radio"
import AlertValidate from "../../components/AlertValidate/AlertValidate"
import Return from "../../components/return/Return"
import '../../styles/global.css'
import { useAuth } from "../../contexts/AuthContext"

export default function Register(){

type RegisterStep = "BASIC" | "RESPONSAVEL"


const [step, setStep] = useState<RegisterStep>("BASIC")



    const [showAlert, setShowAlert] = useState(false)
    const [textAlert, setTextAlert] = useState("");

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

    function handleNext(e: React.FormEvent){
        e.preventDefault

        if(!maioridadeChecker(form.dataNasc) && form.role == 0){
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

function showAlertTemporarily(text : string) {
   setTextAlert(text)
   setShowAlert(true)

  setTimeout(() => {
    setShowAlert(false)
  }, 4500)
}

function handleRerturn(){
    setStep("BASIC");
}


    function validate(): boolean{

        var isValid = true;

        if(!form.nome.trim()) isValid = false;
        if(!form.email.trim()) isValid = false;
        if(!form.senha.trim()) isValid = false;
        if(!form.dataNasc.trim()) isValid = false;
        if(form.role === -1 ) isValid = false;
        if(form.role === 0 && maioridadeChecker(form.dataNasc) == false && !form.nomeResp?.trim()) isValid = false;  
        if(form.role === 0 && maioridadeChecker(form.dataNasc) == false && !form.emailResp?.trim()) isValid = false;

        if(form.role === 1 && maioridadeChecker(form.dataNasc) == false){
            isValid = false
            showAlertTemporarily("Não é possível cadastrar um professor menor de idade.")
            return false;
        }

        if(!isValid){
            showAlertTemporarily("Campos obrigatórios não preenchidos.")
        }

        return isValid;
    }

    const { register } = useAuth();

    async function handleSubmit(e:React.FormEvent) {
        e.preventDefault()
        if(validate()){
            try{
                 await register(form)
            } catch(error){
                console.error("Erro ao registrar", error)
            }
        }
    }

    
    return (
        
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#2b4c7e] rounded-[2px] box-border">

    {showAlert && (
      <AlertValidate
        text={textAlert}
        icon={TbLockPassword}
      />
      
    )}

        <form className="container" onSubmit={handleNext}>

    
    {step === "BASIC" && (
    <>
    <div className="flex flex-row">
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
            
            <Return onClick={handleRerturn}/>

            <br/>
        

            <InputText
                type="text"
                icon={FaPerson}
                value={form.nomeResp ??  ""}
                placeholder="Nome do responsável"
                onChange={value =>
                    setForm({ ...form, nomeResp: value})   
                }
                />

            <br/>

            <InputText
                type="email"
                icon={FaEnvelope}
                value={form.emailResp ?? ""}
                placeholder="Email do responsável"
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