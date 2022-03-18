

var btnmenu = document.querySelector('#toggle');
var menu = document.querySelector('#menu');
var btnsubmenu = document.querySelectorAll('.btn_submenu');
var submenu = document.querySelector('#submenu');

btnmenu.addEventListener('click',()=>{
    menu.classList.toggle('active');
});


for (let i=0; i < btnsubmenu.length; i++) {
    btnsubmenu[i].addEventListener('click',()=>{
        if( window.innerWidth < 1200) {
            var submenu = btnsubmenu[i].nextElementSibling;
            var height = submenu.scrollHeight;
            if(submenu.classList.contains('desplegar')) {
                submenu.classList.remove('desplegar');
                submenu.removeAttribute('style');
            } else {
                submenu.classList.add('desplegar');
                submenu.style.height = height + 'px';
            }
        }
    });
};


