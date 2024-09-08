import React from 'react';
import { Helmet } from 'react-helmet';
import socialLogo from '../assets/images/social-logo.png'

const socialLogoUrl = 'https://www.aledev.com.br/assets/social-logo.png'

const MetaTags = () => {
  return (
    <Helmet>
        <meta name="description" content="Bem vindo ao meu portfolio de Desenvolvedor Web!" />
        <meta name="author" content="Alessandro Chrystian" />
        <meta name="keywords" content="Portfolio, Developer, Freelancer, Front-end, Web, criação de sites, programação" />
        <meta property="og:title" content="Ale.Dev - Portfolio Desenvolvedor Web" />
        <meta property="og:url" content="https://www.aledev.com.br" />
        <meta property="og:image" content={socialLogoUrl} />
        <meta property="ogimage:type" content="Logo do Ale Dev" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:type" content="website" />
    </Helmet>
  )
}

export default MetaTags