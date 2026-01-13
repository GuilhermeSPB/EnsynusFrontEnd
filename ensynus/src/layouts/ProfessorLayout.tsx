import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navBar/Navbar"
import {professorNavbarItems} from "../config/navigation/professor.nav"

export default function ProfessorLayout(){

    const location = useLocation()

    return(
        <>
        <Navbar path={location.pathname} items={professorNavbarItems}/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}