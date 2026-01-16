import Login from "./pages/Login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register/Register"
import MenuAluno from "./pages/Aluno/MenuAluno"
import Redefinir from "./pages/Redefinir/Redefinir"
import MenuProfessor from "./pages/Professor/MenuProfessor"
import { AuthProvider } from "./contexts/AuthContext"
import RequireAuth  from "./routes/RequireAuth"

function App(){
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path= "/redefinir" element={<Redefinir/>}/>

                    {/* Rotas Aluno */}
                <Route element={<RequireAuth role={0}/>}> 
                    <Route path="/aluno/menu" element={<MenuAluno/>}/>
                </Route>

                    {/* Rotas Professor */}
                <Route element={<RequireAuth role={1}/>}>
                    <Route path="/professor/menu" element={<MenuProfessor/>}/>
                </Route>

                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
} 

export default App