import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar/Navbar"
import {professorNavbarItems} from "../config/navigation/professor.nav"

export default function ProfessorLayout(){
    return(
        <>
        <Navbar activeId="home" items={professorNavbarItems}/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
