import logo from '../assets/statics/Logo_Askill_sin_SAS.svg'
import menuHamburger from "../assets/statics/menu-hamburguesa.svg"
import jumbo from "../assets/statics/eplan-engineering-standard.jpeg"
import serviceIcon from '../assets/statics/tocar.svg'


function render(header, jumbotron) {
    header();
    jumbotron();
    servicesMenu();
}

const header = () => {
    /* 
    Mobile menu render
    */
    const mobileMenuContainer = document.createElement('div');
    mobileMenuContainer.setAttribute('class', "mobile-menu-container")
    const imgMenuIcon = document.createElement('img');
    imgMenuIcon.setAttribute('src', menuHamburger);
    imgMenuIcon.setAttribute('alt', 'menu');
    mobileMenuContainer.append(imgMenuIcon);
    /* 
    Enterprise Logo render 
    */
    const mainLogo =  document.createElement('a');
    mainLogo.setAttribute('href', "/");
    mainLogo.setAttribute('class', "logo-container")
    const imgLogo = document.createElement('img');
    imgLogo.setAttribute('src', logo,);
    imgLogo.setAttribute('alt', 'logo empresa');
    mainLogo.append(imgLogo);
    /* 
    Nav render
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
    Header Render 
    */
    const header = document.getElementById('header');
    header.append(mainLogo);
    header.append(nav);
    header.append(mobileMenuContainer)
}

const jumbotron = () => {
    /* 
    Jumbotron render
    */
    const jumboContainer = document.getElementById('jumbo');
    const imgJumbo = document.createElement('img');
    imgJumbo.setAttribute('src', jumbo);
    jumboContainer.append(imgJumbo);
}

const servicesMenu = () => {
    /*
    Services menu render
    */
    const servicesListContainer = document.createElement('div');
    servicesListContainer.setAttribute('class', "services-menu");

    const ulServices = document.createElement('ul');

    const liServiceAutomation = document.createElement('li');
    const serviceNameContainerAutomation = document.createElement('div');
    serviceNameContainerAutomation.setAttribute('class', 'service-name')
    serviceNameContainerAutomation.textContent = "Automatización y control";

    const serviceIconContainerAutomation = document.createElement('div');
    serviceIconContainerAutomation.setAttribute('class', "icon-intro-container");
    const serviceIconImgAutomation = document.createElement('img');
    serviceIconImgAutomation.setAttribute('src', serviceIcon);

    
    const liServiceElectric = document.createElement('li');
    const serviceNameContainerElectric = document.createElement('div');
    serviceNameContainerElectric.setAttribute('class', 'service-name')
    serviceNameContainerElectric.textContent = "Soluciones eléctricas";

    const serviceIconContainerElectric = document.createElement('div');
    serviceIconContainerElectric.setAttribute('class', "icon-intro-container");
    const serviceIconImgElectric = document.createElement('img');
    serviceIconImgElectric.setAttribute('src', serviceIcon);

    const liServiceControl = document.createElement('li');
    const serviceNameContainerControl = document.createElement('div');
    serviceNameContainerControl.setAttribute('class', 'service-name')
    serviceNameContainerControl.textContent = "Tableros de control";

    const serviceIconContainerControl = document.createElement('div');
    serviceIconContainerControl.setAttribute('class', "icon-intro-container");
    const serviceIconImgControl = document.createElement('img');
    serviceIconImgControl.setAttribute('src', serviceIcon);

    const liServiceMaintenance = document.createElement('li');
    const serviceNameContainerMaintenance = document.createElement('div');
    serviceNameContainerMaintenance.setAttribute('class', 'service-name')
    serviceNameContainerMaintenance.textContent = "Automatización y control";

    const serviceIconContainerMaintenance = document.createElement('div');
    serviceIconContainerMaintenance.setAttribute('class', "icon-intro-container");
    const serviceIconImgMaintenance = document.createElement('img');
    serviceIconImgMaintenance.setAttribute('src', serviceIcon);
        

    serviceIconContainerAutomation.append(serviceIconImgAutomation);
    serviceIconContainerElectric.append(serviceIconImgElectric);
    serviceIconContainerControl.append(serviceIconImgControl);
    serviceIconContainerMaintenance.append(serviceIconImgMaintenance);

    liServiceElectric.append(serviceIconContainerElectric, serviceNameContainerElectric);
    liServiceAutomation.append(serviceIconContainerAutomation, serviceNameContainerAutomation );
    liServiceControl.append(serviceIconContainerControl, serviceNameContainerControl );
    liServiceMaintenance.append(serviceIconContainerMaintenance, serviceNameContainerMaintenance );

    ulServices.append(liServiceAutomation, liServiceElectric, liServiceControl, liServiceMaintenance)
    servicesListContainer.append(ulServices)
    const servicesMenuContainer = document.getElementById('servicesMenu')
    servicesMenuContainer.append(servicesListContainer)
}

const renderFunction = render(header, jumbotron, servicesMenu)

export {renderFunction};