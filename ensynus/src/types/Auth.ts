export interface LoginRequest  {
    email : string;
    senha : string;
}

export interface RegisterRequest {
    nome : string;
    email : string;
    senha : string;
    dataNasc : string;
    role : number;

    nomeResp? : string | null;
    emailResp? : string | null;

}

export interface AuthResponse {
    token : string;
    nome : string;
    email : string;
    role : number;
}

 