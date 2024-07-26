import { ReactTyped } from 'react-typed';
import React from 'react';
import SoftSkills from './SoftSkills';

function Hero(props){

    return (
        <section data-aos="zoom-in" className='flex flex-col items-center my-10'>
            <h1 className='text-4xl sm:text-5xl mt-5 text-center h-[144px] '>
                {"</ "}
                <ReactTyped 
                    strings={[`Desenvolvedor`]}
                    typeSpeed={75}
                    loop={false}
                    showCursor={false}
                />
                {" "}
                <span className='text-secondary'>
                    <ReactTyped 
                        strings={["Front-end", "Criativo", "Web"]}
                        loop
                        typeSpeed={100}
                        startDelay={2000}
                        backSpeed={50}
                        showCursor={true}
                        cursorChar=' >'
                    />
                </span>
            </h1>
            <div className={`mb-10 mx-[5%] flex text-start flex-col gap-8 border border-2 ${props.isDark ? "border-dark-border" : "border-border"}  rounded-md p-5`}>
                <h2 className='text-3xl'>Soft Skills</h2>
                <SoftSkills />
            </div>
        </section>
    )
}

export default Hero;