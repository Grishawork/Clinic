import mobileNav from './modules/mobile-nav.js';
mobileNav();

document.addEventListener('DOMContentLoaded', function(){

    let advantagesBox = document.querySelector('.advantages-box');
    let tabButtons = document.querySelectorAll('.advantages-points li');
    let tabContent = document.querySelectorAll('.advantages-info');

    function openTab(index){

        tabButtons.forEach(button =>{
            button.classList.remove('active');
        })

        tabButtons[index].classList.add('active');

        tabContent.forEach(content =>{
            content.style.display = 'none';
        })

        tabContent[index].style.display = 'block';
    }
    
    tabButtons.forEach((button,index)=>{
            button.addEventListener('click',()=>{
                openTab(index)
            })
        })
        if(tabContent.length > 0){
            openTab(0);
        }
})