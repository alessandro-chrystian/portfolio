import React from 'react';

const skills = [
    {
        icon: "bx bxl-javascript",
        webSite: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
        iconOnHover: "hover:text-javascript-logo",
    },
    {
        icon: "bx bxl-react",
        webSite: "https://react.dev/",
        iconOnHover: "hover:text-react-logo",
    },
    {
        icon: "bx bxl-nodejs",
        webSite: "https://nodejs.org/pt",
        iconOnHover: "hover:text-node-logo",
    },
    {
        icon: "bx bxl-bootstrap",
        webSite: "https://getbootstrap.com/",
        iconOnHover: "hover:text-bootstrap-logo",
    },
    {
        icon: "bx bxl-tailwind-css",
        webSite: "https://tailwindcss.com/",
        iconOnHover: "hover:text-tailwind-logo",
    },
    {
        icon: "bx bxl-css3",
        webSite: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
        iconOnHover: "hover:text-css-logo",
    },
    {
        icon: "bx bxl-html5",
        webSite: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
        iconOnHover: "hover:text-html-logo",
    },
]

function StackKnowledge() {
    return (
        <div className='flex flex-col items-center gap-2 mt-10'>
            <h4 className="text-2xl">Minhas Habilidades</h4>
            <ul className='flex gap-5 flex-wrap justify-center text-5xl'>
                {
                   skills.map((skill, idx) => {
                    return <li key={idx}><a href={skill.webSite} target='_blank'><i className={`hover:transition hover:duration-500 ${skill.iconOnHover} ${skill.icon} hover:scale-150 hover:font-bold`} ></i></a></li>
                   })
                }
            </ul>
        </div>
        
    )
}

export default StackKnowledge;