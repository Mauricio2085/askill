import './assets/styles/main.css';
import { renderFunction } from './js/render';
import plc from './assets/statics/plc.jpg';


const services = document.querySelector('#services');
const servicesContainer = document.querySelector('#servicesMenu');
const serviceMenuAnimation = document.getElementById('servicesMenu');
const serviceMenuListAnimation = document.querySelector('.services-menu');
const automation = document.querySelector('#automation');
const automationCardContainer = document.querySelector('.services-card-container');
const automationCard = document.querySelector('.service-container');
const imageCardAutomation = document.querySelector('#imageAutomation');
const imageServiceAutomationAnimation = document.querySelector('#imageAutomation');

const showServices = () => {
    setTimeout(() => {
        serviceMenuAnimation.classList.add("services-container-animation");
        serviceMenuListAnimation.classList.add("services-Menu-animation");
    }, 20)
    servicesContainer.classList.remove('inactive');
}

const hiddeServicesCards = () => {
    serviceMenuAnimation.classList.remove("services-container-animation");
    serviceMenuListAnimation.classList.remove("services-Menu-animation");
    servicesContainer.classList.add('inactive');
    automationCardContainer.classList.add('inactive');
    automationCardContainer.classList.remove("services-card-container-animation");
    
}

const showCardServices = () => {
    setTimeout(() => {
        automationCardContainer.classList.add("services-card-container-animation");
    }, 500)
    automationCardContainer.classList.remove('inactive');
}

services.addEventListener('mouseenter', showServices)
servicesContainer.addEventListener('mouseleave', hiddeServicesCards);

automation.addEventListener('mouseenter', showCardServices)


