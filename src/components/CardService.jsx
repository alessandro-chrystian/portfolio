import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function CardService(props) {
    return (
        <div className={`relative flex flex-col m-auto gap-5 border rounded-lg p-3 ${props.isDark ? "bg-dark-foreground border-dark-border" : "bg-primary-content border-border"} md:w-[80%] lg:w-full h-[110%] justify-center`}>
            <span className="text-border flex border w-[45px] h-[45px] absolute top-[-12%] left-[10%] bg-secondary-light rounded-md border-none justify-center items-center"><FontAwesomeIcon icon={props.icon} /></span>
            <h3 className='text-2xl font-bold'>{props.title}</h3>
            <p>{props.paragraph}
            </p>
        </div>
    )
}

export default CardService;