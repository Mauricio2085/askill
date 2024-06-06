import logo from '../assets/statics/Logo_Askill_sin_SAS.svg'
import menuHamburger from "../assets/statics/menu-hamburguesa.svg"
import jumbo from "../assets/statics/eplan-engineering-standard.jpeg"



function render(header, jumbotron) {
    header();
    jumbotron();
}

const header = () => {
    /* 
    Render del menú en mobile
    */
    const mobileMenuContainer = document.createElement('div');
    mobileMenuContainer.setAttribute('class', "mobile-menu-container")
    const imgMenuIcon = document.createElement('img');
    imgMenuIcon.setAttribute('src', menuHamburger);
    imgMenuIcon.setAttribute('alt', 'menu');
    mobileMenuContainer.append(imgMenuIcon);
    /* 
    Render del Logo de la empresa
    */
    const mainLogo =  document.createElement('a');
    mainLogo.setAttribute('href', "/index.html");
    mainLogo.setAttribute('class', "logo-container")
    const imgLogo = document.createElement('img');
    imgLogo.setAttribute('src', logo,);
    imgLogo.setAttribute('alt', 'logo empresa');
    mainLogo.append(imgLogo);
    /* 
    Render del nav
    */
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const liServices = document.createElement('li');
    const liAbout = document.createElement('li');
    const liSupport = document.createElement('li');
    const aAbout = document.createElement('a');
    ul.setAttribute('class', "navigation");
    liServices.setAttribute('id', "services");
    liServices.textContent = "Servicios";
    aAbout.setAttribute('href', "#about");
    aAbout.textContent = "Sobre nosotros";
    liAbout.append(aAbout);
    liSupport.textContent = "Soporte técnico";
    ul.append(liServices, liAbout, liSupport);
    nav.append(ul);
    /* 
    Render del header
    */
    const header = document.getElementById('header');
    header.append(mainLogo);
    header.append(nav);
    header.append(mobileMenuContainer)
}

const jumbotron = () => {
    /* 
    Render del Jumbotron
    */
    const jumboContainer = document.getElementById('jumbo');
    const imgJumbo = document.createElement('img');
    imgJumbo.setAttribute('src', jumbo);
    jumboContainer.append(imgJumbo);
}

const renderFunction = render(header, jumbotron)

export {renderFunction};