document.addEventListener('DOMContentLoaded', function(){
    const Burger = document.querySelector('.burger'),
    nav = document.getElementById('navigationMenu');
    Burger.addEventListener('click' ,function() {
        Burger.classList.toggle('open')
        nav.classList.toggle('open');
    })
})
