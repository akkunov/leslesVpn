document.addEventListener('DOMContentLoaded', function(){
    const Burger = document.querySelector('.burger'),
    headerContainer = document.getElementById('headerContent'),
    nav = document.getElementById('navigationMenu');
    Burger.addEventListener('click' ,function() {
        headerContainer.classList.toggle('open');
        nav.classList.toggle('open');
        Burger.classList.toggle('open');
    })
})
