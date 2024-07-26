import React from "react";

const navLinks = [
    {
        item: "Sobre",
        navigator: "about",
    },
    {
        item: "Serviços",
        navigator: "services",
    },
    {
        item: "Portfolio",
        navigator: "portfolio",
    },
    {
        item: "Contato",
        navigator: "contact",
    }

]

function MenuNav(props){
    return (
        <ul className={`z-10 ${props.hamburguerMenu ? `${props.active ? `mobile-menu border-b border-l absolute top-[100%] flex gap-3 p-3 right-0 flex-col items-center w-[250px] ${props.isDark ? "bg-dark-background border-border" : "bg-background border-dark-border "} rounded-bl-lg` : `hidden`}` : `hidden sm:flex gap-5`}`}>
            {
                navLinks.map((link, idx) => <li className={`border-on-hover ${props.hamburguerMenu && "border-b"} before:hover:absolute before:hover:bottom-0 before:hover:border before:hover:border-secondary w-full hover:text-secondary hover:duration-500 hover:transition hover:font-semibold relative`} key={idx} ><a className="block text-center" href={`#${link.navigator}`}>{link.item}</a></li>)
            }
        </ul>
    )
}

export default MenuNav;