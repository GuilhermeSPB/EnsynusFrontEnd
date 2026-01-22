import { useState } from "react";
import ProfessorLayout from "../../layouts/ProfessorLayout";
import { useLocation } from "react-router-dom";
import { professorSuggestions } from "../../config/navigation/Professor/professor.welcomeSet";
import { useAuth } from "../../contexts/AuthContext";
import image from "../../img/menuBackgroundProfessor.jpg"
import { WelcomeAnimation } from "../../components/WelcomeAnimation/WelcomeAnimation";

export default function MenuProfessor(){
    const {user, logout} = useAuth();   
    return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
  <div>
    <ProfessorLayout />
  </div>
  <div
    className="flex-1 w-full bg-cover bg-center"
    style={{
      backgroundImage: `

      linear-gradient(140deg, #f4f5f5f5 55%, transparent 55%), url(${image})`,
    }}>
            <div >
                <WelcomeAnimation name={user?.nome} items={professorSuggestions}/>
            </div> 
        </div>
    </div>
    )
}