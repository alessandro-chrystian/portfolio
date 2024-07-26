import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const socialMedias = [
    {
        logo: faLinkedin,
        link: "https://www.linkedin.com/in/alessandro-chrystian/",
        colorOnHover: "hover:text-[#0077B5]",
    },
    {
        logo: faGithub,
        link: "https://github.com/alessandro-chrystian",
        colorOnHover: "hover:text-[#0d74e7]"
    },
    {
        logo: faInstagram,
        link: "https://www.instagram.com/chrystiansandro/",
        colorOnHover: "hover:text-[#e1306c]"
    },
    {
        logo: faWhatsapp,
        link: "https://wa.me/5521981859528",
        colorOnHover: "hover:text-[#075E54]"
    }
]

function SocialMedia() {
    return (
        <>
            {
                socialMedias.map((media, id) => {
                    return ( <li key={id} className={`hover:transition hover:duration-700 ${media.colorOnHover}`}><a href={media.link} target="_blank"><FontAwesomeIcon icon={media.logo} /></a></li> )
                })
            }
        </>
    )
}

export default SocialMedia;