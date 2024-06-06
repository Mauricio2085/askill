import './js/render'
import './assets/styles/main.css'

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


