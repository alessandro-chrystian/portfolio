import React from 'react'

function ContactForm(props) {
    return (
        <form action="mailto:alessandroc.dev@gmail.com" className={`${props.isDark ? "bg-dark-foreground border-dark-border" : "bg-primary-content border-border"} flex flex-col justify-between gap-5 p-5 rounded-xl border`}>
            <div className='flex items-center gap-2'>
                <label htmlFor="name">Nome:</label>
                <input type='text' id='name' placeholder='Digite seu nome' className={`flex-grow border p-2 rounded-md ${props.isDark ? "bg-dark-background border-dark-border" : "bg-background border-border"}`} required />
            </div>
            <div className='flex items-center gap-2'>
                <label htmlFor='email'>E-mail:</label>
                <input type="email" id="email" placeholder='Digite seu email' className={`flex-grow p-2 border ${props.isDark ? "bg-dark-background border-dark-border" : "bg-background border-border"} p-1 rounded-md`} required />
            </div>
            <div className='flex items-center gap-2'>
                <label htmlFor="message">Messagem:</label>
                <textarea id="message" placeholder='Deixe aqui a sua mensagem' className={`flex-grow p-2 border ${props.isDark ? "bg-dark-background border-dark-border" : "bg-background border-border"} rounded-md p-1`}></textarea>
            </div>
            <button type="submit" className='bg-secondary text-primary-content p-1 rounded-md h-[15%]'>Enviar mensagem</button>
        </form>
    )
}

export default ContactForm;