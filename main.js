const header = document.querySelector('header');
const primary_nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');


navToggle.addEventListener('click', ()=>{
    const visibility = primary_nav.getAttribute('data-visible');
    console.log(visibility);
    if(visibility === "false"){
        primary_nav.setAttribute('data-visible',  true)
        navToggle.setAttribute('aria-expanded', true)
    } else if(visibility === "true"){
        primary_nav.setAttribute('data-visible',  false)
        navToggle.setAttribute('aria-expanded', false)
    }
})

window.addEventListener('scroll', ()=>{
    header.classList.toggle('shadow', window.scrollY > 0);
}); 

window.onscroll=()=>{
    primary_nav.classList.remove('active')
}

window.addEventListener('scroll', (e)=>{
    const primary_nav = document.querySelector('.primary-navigation');
    if(window.pageYOffset>0){
        primary_nav.classList.add("add-shadow");
    }else{
        primary_nav.classList.remove("add-shadow");
    }
});

function download(fileUrl, fileName) {
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
  }


// 
// 
// <i class='bx bx-laptop'></i>
// <i class='bx bx-devices' ></i>
// <i class='bx bxs-widget'></i>
// <i class='bx bxs-wrench'></i>
// <i class='bx bx-anchor'></i>
// <i class='bx bxl-netlify'></i>
// 
// <i class='bx bx-data'></i>
// 
// <i class='bx bxl-html5'></i>
// 
// <i class='bx bxl-python'></i>
// <i class='bx bxl-kubernetes'></i>
// <i class='bx bxl-java'></i>
// <i class='bx bxs-component'></i>
// 
// 
// 
// 
