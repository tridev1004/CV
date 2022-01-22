burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
 rightnav=document.getElementById('rightnav')
//rightnav



burger.addEventListener('click',()=>{
    rightnav.classlist.Toogle('v-class')
    navlist.classlist.toogle('v-class')
    navbar.classlist.toogle('h-nav')
})