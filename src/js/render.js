import logo from '../assets/statics/Logo_Askill_sin_SAS.svg'

const mainLogo =  document.getElementById('logo');
const imgLogo = document.createElement('img');
imgLogo.setAttribute('src', logo);
mainLogo.append(imgLogo);