const navbutton = document.querySelector ('#ham-btn');
const navlinks = document.querySelector ('#nav-bar');

navbutton.addEventListener('click',() => {
    navbutton.classList.toggle('show')
    navlinks.classList.toggle('show')
});


const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;