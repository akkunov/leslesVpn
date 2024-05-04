function classRemoverInChildren(element, elemToDelete){
    [...element.children].forEach(element => {
        element.addEventListener('click', function(){
            elemToDelete.forEach(el => {
                el.classList.remove('open');
                el.classList.remove('no--scroll');
            })
        })
       
    }) 
}

document.addEventListener('DOMContentLoaded', function(){

    const Burger = document.querySelector('.burger'),
    nav = document.getElementById('navigationMenu');
    const body = document.getElementById('body');
    const navList = document.querySelector('.nav__list');
    const authButtons = document.querySelector('.auth--buttons')

    Burger.addEventListener('click' ,function() {
        Burger.classList.toggle('open');
        nav.classList.toggle('open');
        body.classList.toggle('no--scroll');

        classRemoverInChildren(navList, [Burger, nav, body]);
        classRemoverInChildren(authButtons, [Burger, nav, body])
    })
})
