import  api  from "./api";
import { useNavigate } from "react-router-dom"

import type { LoginRequest, AuthResponse, RegisterRequest } from "../types/Auth";



export async function login(data : LoginRequest): Promise<AuthResponse>
{

    const response = await api.post<AuthResponse>(
        "/ensynus/api/auth/login",
        data

    )
    localStorage.setItem("user", JSON.stringify({
        nome: response.data.nome,
        email: response.data.email,
        role: response.data.role,
        token: response.data.token
    }));

    response.data.role == 0 ? localStorage.setItem("role", JSON.stringify("Aluno")) : localStorage.setItem("role", JSON.stringify("Professor"));

    return response.data;
}

export async function register(data : RegisterRequest): Promise<AuthResponse>
{
    const response = await api.post<AuthResponse>(
        "/ensynus/api/auth/register",
        data
    )

    return response.data;
}





