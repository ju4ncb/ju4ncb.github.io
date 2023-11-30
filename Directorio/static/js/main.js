const navTitle = [...document.querySelectorAll('.nav__title')];
const caretDown = [...document.querySelectorAll('.bi-caret-down-fill')];
const navText = document.getElementById('navText');
const navFooter = document.getElementById('navFooter');
let timeOut = 0;

// Street spirit (Fade out)
function fadeOutOrIn(contactoContenido, textoContenido, navContenido){
    if(contactoContenido.style.opacity === '0'){
        navContenido.style.height = '400px';
        timeOut = 1;
        setTimeout(() => {
            textoContenido.style.opacity = '1';
            contactoContenido.style.opacity = '1';
            timeOut = 0;
        }, 400)
    }else{
        timeOut = 1;
        textoContenido.style.opacity = '0';
        contactoContenido.style.opacity = '0';
        setTimeout(() => {
            navContenido.style.height = '75px';
            timeOut = 0;
        }, 150);
    }
}

function scrollToBottom() {
    console.log('waos')
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

// Funcion para hacer deslizable el contenido del nav__title
(function(){
    caretDown.forEach(caret => {
        caret.addEventListener('click', () => {
            if(timeOut === 0){
                const contenedorCaret = caret.parentElement;
                const navContenido = contenedorCaret.parentElement.nextElementSibling;
                // Div del texto y del contacto
                fadeOutOrIn(navContenido.firstElementChild, navContenido.firstElementChild.nextElementSibling, navContenido.parentElement);
                contenedorCaret.classList.toggle('infobox__title__icon--rotate');
            }
        })
    });
})();


