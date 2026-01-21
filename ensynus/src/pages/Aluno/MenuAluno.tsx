import { useState } from "react";
import AlunoLayout from "../../layouts/AlunoLayout";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function MenuAluno(){
    const {user, logout} = useAuth();

    return (
        <div>
            <AlunoLayout/>

            <div>
                <span>Bem vindo {user?.nome}</span>
            </div> 
        </div>


    )
}