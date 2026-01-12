import Login from "./pages/Login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register/Register"
import MenuAluno from "./pages/Aluno/MenuAluno"
import AlunoLayout from "./layouts/AlunoLayout"


function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register/>}/>


                {/* Rotas Aluno */}
            <Route path="/aluno">
                <Route path="menu" element={<MenuAluno/>}></Route>
            </Route>

                {/* Rotas Professor */}
            <Route path="/professor" element={<AlunoLayout/>}>
                
            </Route>

            </Routes>
        </BrowserRouter>
    )
} 

export default App