import logo from '../assets/statics/Logo_Askill_sin_SAS.svg';
import menuHamburger from "../assets/statics/menu-hamburguesa.svg";
import jumbo from "../assets/statics/eplan-engineering-standard.jpeg";
import serviceIcon from '../assets/statics/tocar.svg';
import plc from '../assets/statics/plc.jpg';
import electric from '../assets/statics/instalacion-electrica.jpg';
import panel from '../assets/statics/gabinete de control.jpg';


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

    const serviceIconContainerMaintenance = document.createElement('div');
    serviceIconContainerMaintenance.setAttribute('class', "icon-intro-container");
    const serviceIconImgMaintenance = document.createElement('img');
    serviceIconImgMaintenance.setAttribute('src', serviceIcon);
        

    serviceIconContainerAutomation.append(serviceIconImgAutomation);
    serviceIconContainerElectric.append(serviceIconImgElectric);
    serviceIconContainerControl.append(serviceIconImgControl);
    serviceIconContainerMaintenance.append(serviceIconImgMaintenance);

    liServiceElectric.append(serviceIconContainerElectric, serviceNameContainerElectric);
    liServiceAutomation.append(serviceIconContainerAutomation, serviceNameContainerAutomation);
    liServiceControl.append(serviceIconContainerControl, serviceNameContainerControl);

    const introServiceContainer = document.createElement('section');
    introServiceContainer.setAttribute('class', "services-intro-menu");

    const serviceCardContainer = document.createElement('div');
    serviceCardContainer.setAttribute('class', "services-card-container");
    serviceCardContainer.classList.add("inactive");

    const titleServiceAutomation = document.createElement('div');
    titleServiceAutomation.setAttribute('class', "title-service");
    const textTitleAutomation = document.createElement('h1');
    textTitleAutomation.innerHTML = titleAutomation;
    
    const serviceAutomationContainer = document.createElement('div');
    serviceAutomationContainer.setAttribute('class', "service-container");
    const imageServiceAutomation = document.createElement('img');
    imageServiceAutomation.setAttribute('src', plc);
    imageServiceAutomation.setAttribute('id', 'imageAutomation');
    const textServiceAutomation = document.createElement('div');
    textServiceAutomation.setAttribute('class', "text-service");
    textServiceAutomation.innerHTML = textAutomation;

    titleServiceAutomation.append(textTitleAutomation);
    serviceAutomationContainer.append(imageServiceAutomation, textServiceAutomation);

    serviceCardContainer.append(titleServiceAutomation, serviceAutomationContainer);


    introServiceContainer.append(serviceCardContainer);
    /*

    */
    ulServices.append(liServiceAutomation, liServiceElectric, liServiceControl);
    servicesListContainer.append(ulServices);
    const servicesMenuContainer = document.getElementById('servicesMenu');
    servicesMenuContainer.append(servicesListContainer, introServiceContainer);


}

const servicesMain = () => {
    /*
    
    */
    const mainTitleAutomation = "Automatización Industrial";
    const mainTextAutomation = "Ofrecemos soluciones de automatización de última generación que le permiten transformar su producción y alcanzar nuevos niveles de eficiencia en la era de la Industria 4.0. Nuestro enfoque de alta calidad está diseñado para impulsar la productividad y la eficiencia de sus procesos al máximo. Trabajamos con las marcas líderes, como Mitsubishi, Delta, Unitronics, entre otras, para brindarle las soluciones más avanzadas y confiables del mercado";
    const mainTitleElectrical = "Instalaciones Eléctricas";
    const mainTextElectrical = "Nuestro servicio de Instalaciones Eléctricas y Redes de Datos combina experiencia en ingeniería eléctrica con soluciones de conectividad avanzadas para ofrecer un servicio completo y de alta calidad";
    const mainTitleControl = "Tableros de control"
    const mainTextControl = "Nuestro servicio de Instalaciones Eléctricas y Redes de Datos combina experiencia en ingeniería eléctrica con soluciones de conectividad avanzadas para ofrecer un servicio completo y de alta calidad";
    /*
    Build of Automation service section
    */
    const automationServiceMainContainer = document.createElement('Selection');
    automationServiceMainContainer.classList.add('services-main-container');

    const mainTitleServiceAutomation = document.createElement('div');
    mainTitleServiceAutomation.setAttribute('class', "main-title-service");

    const mainTextTitleAutomation = document.createElement('h1');
    mainTextTitleAutomation.innerHTML = mainTitleAutomation;

    const serviceAutomationCardContainer = document.createElement('div');
    serviceAutomationCardContainer.classList.add("main-service-card-container");

    const mainImageServiceAutomation = document.createElement('img');
    mainImageServiceAutomation.setAttribute('src', plc);

    const mainTextServiceCardAutomation = document.createElement('div');
    mainTextServiceCardAutomation.setAttribute('class', "main-text-service");
    mainTextServiceCardAutomation.innerHTML = mainTextAutomation;

    serviceAutomationCardContainer.append(mainImageServiceAutomation, mainTextServiceCardAutomation)
    mainTitleServiceAutomation.append(mainTextTitleAutomation);
    automationServiceMainContainer.append(mainTitleServiceAutomation, serviceAutomationCardContainer);
    /*
    Build of electrical installations service section
    */
    const electricalServiceMainContainer = document.createElement('Selection');
    electricalServiceMainContainer.classList.add('services-main-container');

    const mainTitleServiceElectrical = document.createElement('div');
    mainTitleServiceElectrical.setAttribute('class', "main-title-service");

    const mainTextTitleElectrical = document.createElement('h1');
    mainTextTitleElectrical.innerHTML = mainTitleElectrical;

    const serviceElectricalCardContainer = document.createElement('div');
    serviceElectricalCardContainer.classList.add("main-service-card-container");

    const mainImageServiceElectrical = document.createElement('img');
    mainImageServiceElectrical.setAttribute('src', electric);
    
    const mainTextServiceCardElectrical = document.createElement('div');
    mainTextServiceCardElectrical.setAttribute('class', "main-text-service");
    mainTextServiceCardElectrical.innerHTML = mainTextElectrical;

    serviceElectricalCardContainer.append(mainImageServiceElectrical, mainTextServiceCardElectrical)
    mainTitleServiceElectrical.append(mainTextTitleElectrical);
    electricalServiceMainContainer.append(mainTitleServiceElectrical, serviceElectricalCardContainer);
    /*
    Build of Control panel service section
    */
    const controlServiceMainContainer = document.createElement('Selection');
    controlServiceMainContainer.classList.add('services-main-container');

    const mainTitleServiceControl = document.createElement('div');
    mainTitleServiceControl.setAttribute('class', "main-title-service");

    const mainTextTitleControl= document.createElement('h1');
    mainTextTitleControl.innerHTML = mainTitleControl;

    const serviceControlCardContainer = document.createElement('div');
    serviceControlCardContainer.classList.add("main-service-card-container");

    const mainImageServiceControl = document.createElement('img');
    mainImageServiceControl.setAttribute('src', panel);
    
    const mainTextServiceCardControl = document.createElement('div');
    mainTextServiceCardControl.setAttribute('class', "main-text-service");
    mainTextServiceCardControl.innerHTML = mainTextControl;

    serviceControlCardContainer.append(mainImageServiceControl, mainTextServiceCardControl)
    mainTitleServiceControl.append(mainTextTitleControl);
    controlServiceMainContainer.append(mainTitleServiceControl, serviceControlCardContainer);
    /*
    Main services Render 
     */
    const mainServicesRender = document.getElementById('mainContainer')
    mainServicesRender.append(automationServiceMainContainer, electricalServiceMainContainer, controlServiceMainContainer);
}

const about = () => {

    const aboutText = "ASKILL S.A.S es una empresa pereirana especializada en la automatización y control de procesos industriales. Nuestro enfoque se basa en brindar servicios de alta calidad en áreas especializadas como electrónica, automatización industrial, robótica y desarrollo desoftware, con el objetivo de ayudar a nuestros clientes a superar desafíos y lograr sus objetivos."
    "Nuestra misión incluye colaborar estrechamente con empresas de nuestra región para ofrecer soluciones efectivas y eficientes. Nos destacamos en cada proyecto en el que participamos, basándonos en principios sólidos como la organización, la planificación excepcional y la obtención de resultados satisfactorios.";
            
        }

const renderFunction = render(header, jumbotron, servicesMenu, servicesMain)

export {renderFunction};