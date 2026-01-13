import { useState } from "react";
import ProfessorLayout from "../../layouts/ProfessorLayout";
import { useLocation } from "react-router-dom";

export default function MenuProfessor(){

    return (
        <div>
            <ProfessorLayout/>

            <div>
                <span>Bem vindo professor {JSON.parse(localStorage.getItem("user") || '""')}</span>
            </div>
        </div>


    )
}