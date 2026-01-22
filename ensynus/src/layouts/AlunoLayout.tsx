import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navBar/Navbar"
import {alunoNavbarItems} from "../config/navigation/Aluno/aluno.nav"


export default function AlunoLayout(){

    const location = useLocation()

    return(
        <>
        <Navbar path={location.pathname} items={alunoNavbarItems}/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
