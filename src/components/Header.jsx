import React, {useState, useEffect, useRef} from "react";
import '../components/Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import MenuNav from "./MenuNav";
import curriculo from '../assets/CV.Alessandro.SuporteTécnicodeInformática.2024.pdf'

function Header(props) {
    const [active, setMode] = useState(false)
    const headerRef = useRef(null)
    const [headerIsFixed, setHeaderIsFixed] = useState(false)

    const toggleMode = () => {
        setMode(!active)
    }

    const toggleFixedHeader = () => {
        if(window.scrollY > headerRef.current.clientHeight){
            setHeaderIsFixed(true)
        } else {
            setHeaderIsFixed(false)
        }
    } 

    useEffect(() => {
        window.addEventListener("scroll", toggleFixedHeader)

        return () => {
            window.removeEventListener("scroll", toggleFixedHeader)
        }
        
    }, [])

    return (
        <header ref={headerRef} className={`transition duration-300 flex top-0 justify-between items-center p-5 ${headerIsFixed ? `fixed ${props.isDark ? "bg-dark-background border-border" : "bg-background border-dark-border"} w-full z-10 opacity-80 border-b` : "relative"} lg:px-[8%]`}>
           <span className="text-xl font-bold">Ale.Dev</span>
            <MenuNav />
            <div onClick={props.togglePageView} className="relative flex items-center gap-2">
                <span><FontAwesomeIcon icon={faSun} /></span>
                <span className={`before:transition-all before:duration-300 w-[35px] h-[18px] border border-2 rounded-xl relative bottom-[1px] before:absolute before:w-[12px] before:h-[12px] before:border before:border-2 ${props.isDark ? "before:left-[17px]" : "before:left-[2px]"} before:top-[1px] before:rounded-full`}></span>
                <span><FontAwesomeIcon icon={faMoon} /></span>
            </div>
            <div>
                <a href={curriculo} target="_blank" className="bg-secondary-dark font-bold p-2 rounded-lg text-primary-content">Currículo</a>
            </div>
            <div className={active ? "block sm:hidden icon iconActive" : "icon sm:hidden"} onClick={toggleMode}>
                <div className="hamburguer hamburguerIcon">
                </div>
                <MenuNav hamburguerMenu active={active} isDark={props.isDark} />
            </div>

        </header>
    )
}

export default Header