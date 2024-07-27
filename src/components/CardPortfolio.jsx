import React from 'react';

function CardPortfolio(props){

    return (
        <div data-aos={props.fadeRight ? "fade-right" : "fade-left"} className={`${props.isDark ? "bg-dark-foreground border-dark-border" : "bg-primary-content border-border"} p-5 rounded-xl flex items-center flex-col-reverse ${props.reverse ? "lg:flex-row" : "lg:flex-row-reverse"} items-center justify-between mx-[5%] gap-10 border `}>
            <div className='text-justify flex flex-col gap-8 lg:w-[50%]'>
                <h3 className='text-3xl text-start font-bold'>{props.title}</h3>
                <p className='text-lg'>{props.paragraph}</p>
                <div className='flex justify-between items-end h-full'>
                    <ul className='text-3xl w-[40%] lg:w-fit flex flex-wrap gap-2'>
                        {props.skillsUsed}
                    </ul>
                    <a href={props.projectLink} target="_blank" className='bg-primary-light font-bold p-2 w-fit rounded-lg'>{props.inDev ? "EM BREVE" : "ACESSE O SITE"}</a>
                </div>
            </div>
            <div>
                <img src={props.projectImg} alt="project image" />
            </div>
        </div>
    )
}

export default CardPortfolio;