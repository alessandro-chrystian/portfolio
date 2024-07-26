import React from 'react';

let currentDate = new Date()
let year = currentDate.getFullYear()

function Footer() {
    return (
        <footer className='flex justify-around m-auto px-10 py-3 items-center text-center bg-secondary p-2 text-primary-content'>
            <p>Feito por <a href="https://github.com/alessandro-chrystian" target="_blank">Alessandro Chrystian</a></p>
            <p>Todos os direitos reservados © {year}</p>
        </footer>
    )
}

export default Footer