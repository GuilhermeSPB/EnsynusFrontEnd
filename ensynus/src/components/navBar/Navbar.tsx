import logo from "../../img/logo.jpg"
import { useState } from "react"
import { FaCaretDown } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useAuth } from "../../contexts/AuthContext";


export type NavbarItem = {
  id: string
  label: string
  path: string
  disabled?: boolean
}

type NavbarProps = {
    items: NavbarItem[]
    path: string
    onNavigate?: (path: string) => void
}


export default function Navbar({ items, path, onNavigate}: NavbarProps){

const [open, setOpen] = useState(false);
const [show, setShow] = useState(false);

const {user} = useAuth();

const toggle = () => {
  if (!show) {
    setShow(true);
    setOpen(true);
  } else {
    setOpen(false);
    setTimeout(() => setShow(false), 400); 
  }
};

     return (
    <nav className="w-full h-16 flex flex-row items-center gap-2 pr-6 bg-[#2b4c7e]">
    <img src={logo} alt="Logo" className="h-full rounded-r-md"/>

      {items.map(item => {
        const isActive = item.path === path;

        return (
          <button
            key={item.id}
            disabled={item.disabled}
            onClick={() => onNavigate?.(item.path)}
            className={`flex items-center ml-5 py-[10px] px-4 text-[0.95rem] font-medium cursor-pointer transition-all duration-150 ease-out
              ${isActive 
                ? "bg-[#f7c948] text-[#2b4c7e] hover:bg-[#ffd45f] rounded-lg" 
                : "bg-transparent text-white opacity-90"
              }
              enabled:hover:-translate-y-px
              disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none
            `}
          >
            {item.label}
          </button>
        );
      })}
      <div className="relative ml-auto group" >

      <button
        onClick={toggle}
        className="text-white flex flex-col items-start"
      >
        <div className="flex items-center gap-1">
          <span>{user?.nome}</span>
          <FaCaretDown />
        </div>

        <p className="text-[12px]">{user?.role === 0 ? "Aluno" : "Professor"}</p>
    </button>
        {show && (
        
          <ul className={`fixed right-0 mt-2 w-32 bg-[#2b4c7e] rounded-sm shadow-lg 
                         ${open ? "animate-fade-in-right" : "animate-fade-out-right"}`}>

          <li className="m-1 text-[#ffffff] flex items-center gap-2 rounded hover:bg-[#2d5a9c] cursor-pointer">
             <IoIosLogOut /> Logout
          </li>
        </ul>
        )}
      </div>
    </nav>
  )
}
