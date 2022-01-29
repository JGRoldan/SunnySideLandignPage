let nav=document.querySelector('.nav')
let icon=document.querySelector('.icono')

icon.addEventListener('click', ()=>{
    icon.classList.toggle('changeIcon');
    nav.classList.toggle('showNav');

    //close nav when click on '<a></a>'
    nav.addEventListener('click', (e)=>{
        if(nav.classList.contains('showNav') && icon.classList.contains('changeIcon')){
          nav.classList.toggle('showNav');
          icon.classList.toggle('changeIcon');
    }})
})
