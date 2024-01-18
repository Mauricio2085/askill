import './assets/styles/main.css'
import logo from './assets/statics/Logo_Askill_sin_SAS.svg'

const mainLogo =  document.getElementById('logo');
const imgLogo = document.createElement('img');
imgLogo.setAttribute('src', logo);
mainLogo.append(imgLogo);

const services = document.querySelector('#services');
const servicesContainer = document.querySelector('.services-container');

const showServices = () => {
    servicesContainer.classList.remove('inactive');
}

const hiddeServices = () => {
    servicesContainer.classList.add('inactive');

}
services.addEventListener('mouseenter', showServices)
servicesContainer.addEventListener('mouseleave', hiddeServices);


