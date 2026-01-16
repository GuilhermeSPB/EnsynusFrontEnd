import Login from "./pages/Login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register/Register"
import MenuAluno from "./pages/Aluno/MenuAluno"
import AlunoLayout from "./layouts/AlunoLayout"
import Redefinir from "./pages/Redefinir/Redefinir"
import MenuProfessor from "./pages/Professor/MenuProfessor"
import { AuthProvider } from "./contexts/AuthContext"


function App(){
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path= "/redefinir" element={<Redefinir/>}/>

                    {/* Rotas Aluno */}
                <Route path="/aluno">
                    <Route path="menu" element={<MenuAluno/>}/>
                </Route>

                    {/* Rotas Professor */}
                <Route path="/professor">
                    <Route path="menu" element={<MenuProfessor/>}/>
                </Route>

                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
} 

export default App