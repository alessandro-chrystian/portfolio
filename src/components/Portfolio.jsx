import React from 'react';
import CardPortfolio from './CardPortfolio';
import { faBootstrap, faCss3Alt, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import devBurguer from '../assets/images/dev-burguer.png'
import appDukeza from '../assets/images/app-dukeza.png'
import pythonTipsCode from '../assets/images/curso-python-tipscode.png'

const devBurguerSkills = [
    {
        icon: faJs,
        iconOnHover: "hover:text-javascript-logo",
    },
    {
        icon: faBootstrap,
        iconOnHover: "hover:text-bootstrap-logo",
    },
    {
        icon: faHtml5,
        iconOnHover: "hover:text-html-logo",
    },
    {
        icon: faCss3Alt,
        iconOnHover: "hover:text-css-logo"
    },
]
const catLandingPageSkills = [
    {
        icon: faBootstrap,
        iconOnHover: "hover:text-bootstrap-logo",
    },
    {
        icon: faHtml5,
        iconOnHover: "hover:text-html-logo",
    },
    {
        icon: faCss3Alt,
        iconOnHover: "hover:text-css-logo",
    },
]
const pythonCourseSkills = [
    {
        icon :"bx bxl-javascript",
        iconOnHover: "hover:text-javascript-logo",
    },
    {
        icon:"bx bxl-react",
        iconOnHover: "hover:text-react-logo",
    },
    {
        icon:"bx bxl-tailwind-css",
        iconOnHover: "hover:text-tailwind-logo",
    },
    {
        icon:"bx bxl-css3",
        iconOnHover: "hover:text-css-logo",
    },
    {
        icon:"bx bxl-html5",
        iconOnHover: "hover:text-html-logo",
    },
]

function Portfolio(props) {
    return (
        <section id="portfolio" className='flex flex-col gap-10 container mx-auto text-center mb-10'>
            <h2 className='text-5xl'>Portfolio</h2>
            <CardPortfolio title="Dev Burger" paragraph="Uma Hamburgueria 100% funcional, onde se é possível realizar pedidos, colocar o seu endereço para a entrega do lanche e entrar em contato com o whatsapp da hamburgueria." projectImg={devBurguer} projectLink="https://project-burger-place.vercel.app/" isDark={props.isDark} skillsUsed={devBurguerSkills.map((icon, idx) => {
                return (<li className={`hover:transition hover:duration-500 ${icon.iconOnHover}`} key={idx}><FontAwesomeIcon icon={icon.icon} /></li>)
            })} />
            <CardPortfolio fadeRight reverse isDark={props.isDark} title="App Dukeza" paragraph="Uma Landing Page responsiva que tem como foco proporcionar para o cliente a adoção de gatos e planos exclusivos referentes a adoções. Feito com base no curso FullStack Turbo - TipsCode" projectImg={appDukeza} projectLink="https://alessandro-chrystian.github.io/app-dukeza/" skillsUsed={catLandingPageSkills.map((icon, idx) => {
                return (<li className={`hover:transition hover:duration-500 ${icon.iconOnHover}`} key={idx}><FontAwesomeIcon icon={icon.icon} /></li>)
            })} />
            <CardPortfolio isDark={props.isDark} title="Curso de Python TipsCode" paragraph={`Página real do curso de Python da Tipscode, onde fui escolhido para fazer parte do time de desenvolvimento do site. Fiquei responsável pelas partes do Hero, Conteúdo e Depoimentos.`} projectImg={pythonTipsCode} projectLink="https://tipscode.com.br/curso-python-turbo" skillsUsed={pythonCourseSkills.map((icon, idx) => {
                return (<li className={`hover:transition hover:duration-500 text-4xl ${icon.iconOnHover}`} key={idx}><i className={icon.icon}></i></li>)
            })} />
        </section>
    )
}

export default Portfolio;