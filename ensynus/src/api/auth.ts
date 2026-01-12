import  api  from "./api";

import type { LoginRequest, AuthResponse, RegisterRequest } from "../types/auth";



export async function login(data : LoginRequest): Promise<AuthResponse>
{
    const response = await api.post<AuthResponse>(
        "/ensynus/api/auth/login",
        data

    )
    localStorage.setItem("user", JSON.stringify(response.data.nome))
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



