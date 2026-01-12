import styles from "./Navbar.module.css"
import logo from "../../img/logo.jpg"

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
                ? "bg-[#f7c948] text-[#2b4c7e] hover:bg-[#ffd45f]" 
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
    </nav>
  )
}