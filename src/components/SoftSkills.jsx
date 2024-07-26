import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const softSkills = ["Proatividade", "Autodidatismo", "Detalhismo", "Crítica", "Adaptabilidade", "Resolução", "Organização", "Comunicação", "Paciência"]

function SoftSkills() {
    return (
        <ul className='relative grid grid-cols-2 md:grid-cols-3 text-md md:text-xl gap-10 items-center'>
            {
                softSkills.map((skill, idx) => <li key={idx} className='flex flex-col md:flex-row items-start md:items-center gap-2'><FontAwesomeIcon icon={faAnglesRight} className='text-secondary' /> {skill}</li>)
            }
        </ul>
    )
}

export default SoftSkills;