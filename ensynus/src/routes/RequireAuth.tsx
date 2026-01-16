import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function RequireAuth({ role }: {role?: number}){
    const {user} = useAuth();

    if(!user) return <Navigate to="/login" replace/>

    if(role !== undefined && user.role!== role)
        return <Navigate to="/login" replace/>
    
    const stored = localStorage.getItem("user");
    if(!stored) <Navigate to="/login" replace/>

    return <Outlet/>
}