import { createContext, useContext, useState } from "react";
import { useNavigate, } from "react-router-dom";
import {login as loginRequest, register as registerRequest } from "../api/auth"
import type { AuthResponse, LoginRequest, RegisterRequest} from "../types/Auth";
import { isTokenValid } from "../utils/auth";

type User = {
  nome: string;
  email: string;
  role: number;
};

type AuthContextType = {
  user: User | null;
  login: (data: any) => Promise<void>;
  register: (data : any) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(() => {
  const stored = localStorage.getItem("user");
  if (!stored) return null;

  try {
    const parsed = JSON.parse(stored);

    if(!parsed.token || !isTokenValid(parsed.token)){
      localStorage.removeItem("user");
      return null;
    }



    return {
      nome: parsed.nome,
      email: parsed.email,
      role: parsed.role,
    };
  } catch {
    return null;
  }
});


  async function login(data: LoginRequest) {
    const response: AuthResponse = await loginRequest(data);

    const userData: User = {
      nome: response.nome,
      email: response.email,
      role: response.role
    };

    setUser(userData);

    localStorage.setItem("user", JSON.stringify({
      ...userData,
      token: response.token,
    }));

    navigate(response.role === 0 ? "/aluno/menu" : "/professor/menu");
  }

  async function register(data : RegisterRequest){
    const response : AuthResponse = await registerRequest(data);

    const userData: User = {
      nome: response.nome,
      email: response.email,
      role: response.role
    };


    localStorage.setItem("user", JSON.stringify({
      ...userData,
      token: response.token,
    }));

    navigate(response.role === 0 ? "/aluno/menu" : "/professor/menu");
  }

  async function logout() {
      setUser(null);
      localStorage.removeItem("user");
      navigate("/login");
    }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
