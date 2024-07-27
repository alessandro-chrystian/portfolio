import React, {useState} from 'react'
import emailjs from 'emailjs-com'

function ContactForm(props) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_vkc8vfc', 'template_qxyznjk', e.target, 'qZysJduRwz34RCN2R').then((result) => {
            alert('Mensagem enviada com sucesso!')
            setFormData({
                name: '',
                email: '',
                number: '',
                message: ''
            })
        }, (error) => {
            console.log(error)
            alert('Erro ao enviar a mensagem.')
        })
    }

    return (
        <form onSubmit={handleSubmit} className={`${props.isDark ? "bg-dark-foreground border-dark-border" : "bg-primary-content border-border"} flex flex-col justify-between gap-5 p-5 rounded-xl border`}>
            <div className='flex items-center gap-2'>
                <label htmlFor="name">Nome:</label>
                <input onChange={handleChange} value={formData.name} type='text' id='name' name="name" placeholder='Digite seu nome' className={`flex-grow border p-2 rounded-md ${props.isDark ? "bg-dark-background border-dark-border" : "bg-background border-border"}`} required />
            </div>
            <div className='flex items-center gap-2'>
                <label htmlFor='email'>E-mail:</label>
                <input onChange={handleChange} value={formData.email} type="email" id="email" name="email" placeholder='Digite seu email' className={`flex-grow p-2 border ${props.isDark ? "bg-dark-background border-dark-border" : "bg-background border-border"} p-1 rounded-md`} required />
            </div>
            <div className='flex items-center gap-2'>
                <label htmlFor='email'>Número:</label>
                <input onChange={handleChange} value={formData.number} type="tel" id="number" name="number" placeholder='Digite seu número' className={`flex-grow p-2 border ${props.isDark ? "bg-dark-background border-dark-border" : "bg-background border-border"} p-1 rounded-md`} required />
            </div>
            <div className='flex items-center gap-2'>
                <label htmlFor="message">Messagem:</label>
                <textarea onChange={handleChange} value={formData.message} id="message" name="message" placeholder='Deixe aqui a sua mensagem' className={`flex-grow p-2 border ${props.isDark ? "bg-dark-background border-dark-border" : "bg-background border-border"} rounded-md p-1`} required></textarea>
            </div>
            <button type="submit" className='bg-secondary text-primary-content p-1 rounded-md h-[15%]'>Enviar mensagem</button>
        </form>
    )
}

export default ContactForm;