import React from 'react';
import { Helmet } from 'react-helmet';

const socialLogoUrl = 'https://www.aledev.com.br/assets/social-logo-inS7Ky25.png'

const MetaTags = () => {
  return (
    <Helmet>
        <meta name="description" content="Bem vindo ao meu portfolio de Desenvolvedor Web!" />
        <meta name="author" content="Alessandro Chrystian" />
        <meta name="keywords" content="Portfolio, Developer, Freelancer, Front-end, Web, criação de sites, programação" />
        <meta property="og:title" content="Ale.Dev - Portfolio Desenvolvedor Web" />
        <meta property="og:url" content="https://www.aledev.com.br" />
        <meta property="og:image" content={socialLogoUrl} />
        <meta property="og:type" content="website" />
    </Helmet>
  )
}

export default MetaTags