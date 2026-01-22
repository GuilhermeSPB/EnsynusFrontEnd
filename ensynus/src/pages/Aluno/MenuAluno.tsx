import { use, useState } from "react";
import AlunoLayout from "../../layouts/AlunoLayout";
import { useAuth } from "../../contexts/AuthContext";
import { WelcomeAnimation } from "../../components/WelcomeAnimation/WelcomeAnimation";
import { alunoSuggestions } from "../../config/navigation/Aluno/aluno.welcomeSet";
import image from "../../img/menuBackground.jpg"

export default function MenuAluno(){
    const {user, logout} = useAuth();

    return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
  <div>
    <AlunoLayout />
  </div>
  <div
    className="flex-1 w-full bg-cover bg-center"
    style={{
      backgroundImage: `

      linear-gradient(140deg, #f4f5f5f5 55%, transparent 55%), url(${image})`,
    }}>
            <div >
                <WelcomeAnimation name={user?.nome} items={alunoSuggestions}/>
            </div> 
        </div>
    </div>
    )
}