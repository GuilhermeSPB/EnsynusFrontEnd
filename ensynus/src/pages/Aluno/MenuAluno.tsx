import { useState } from "react";
import AlunoLayout from "../../layouts/AlunoLayout";
import { useLocation } from "react-router-dom";

export default function MenuAluno(){

    return (
        <div>
            <AlunoLayout/>

            <div>
                <span>Bem vindo {JSON.parse(localStorage.getItem("user") || '""')}</span>
            </div>
        </div>


    )
}