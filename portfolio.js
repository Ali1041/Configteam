const navbarblock=document.getElementById('navbar');
const menubaricon=document.getElementById('btn-i');
const menucloseicon=document.getElementById('btn-2');
const block3=document.getElementById('block3');
const block4=document.getElementById('block4');
const welcome=document.getElementById('welcome');
const intro=document.getElementById('introtext');
const text=document.getElementById('text-1');
const services=document.getElementById('block-service')
const webdev=document.getElementById('webdev')
const webdes=document.getElementById('webdesign')
const seo=document.getElementById('SEO')
const ui=document.getElementById('ui')
const block5=document.getElementById('work')
const mywork=document.getElementById('mywork1');
const carosel=document.getElementById('carosel');
const slides=Array.from(carosel.children);
const leftbtn=document.getElementById('leftarrow');
const rightbtn=document.getElementById('rightarrow');
const track=document.getElementById('making-r')
//menu open event listener

menubaricon.addEventListener('click',()=>{
    navbarblock.classList.add('slide-navbar');

});

//menu close event listener

menucloseicon.addEventListener('click',()=>{
    navbarblock.classList.remove('slide-navbar');
    
});

//second block observer and animation

const options={
    rootMargin : '-40% 0% -40% 0%'
};

const thisobeserver=new IntersectionObserver((entries,thisobeserver)=>{
    entries.forEach((entry)=>{
        
        if(!entry.isIntersecting){
            welcome.classList.remove('fade-in');
            intro.classList.remove('fade-in');
            text.classList.remove('fade-in');
        }
        else{
            
            welcome.classList.add('fade-in');
            intro.classList.add('fade-in');
            text.classList.add('fade-in');
        }
    })
},options);
thisobeserver.observe(block4);


//second observer services

const options1={
    rootMargin:'-40% 0px -40% 0px'
}
const secondobserver=new IntersectionObserver((entries,secondobserver)=>{
    entries.forEach((item)=>{
        if(!item.isIntersecting){
            
            webdev.classList.remove('fade-right');
            seo.classList.remove('fade-right');
            webdes.classList.remove('fade-left');
            ui.classList.remove('fade-left');
        }
        else{
            webdev.classList.add('fade-right');
            seo.classList.add('fade-right');
            webdes.classList.add('fade-left');
            ui.classList.add('fade-left');
        }
    })
},options1);
secondobserver.observe(services);


//lazy loading img

function preloadimg(eventtarget){
    
}
const configuration={
    rootMargin:'0% 90% 70% 90%',
    threshold:'0'
}
const imgarray=document.querySelectorAll('[data-src]')
console.log(imgarray)
const lazyload=new IntersectionObserver((entries,lazyload)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            const src=entry.target.getAttribute('data-src')
            entry.target.removeAttribute('data-src');
            entry.target.setAttribute('src',src);
            lazyload.unobserve(entry.target)
        }
    })
},configuration);
imgarray.forEach((img)=>{
    lazyload.observe(img)
});



//slider
console.log(slides);
const slidemov=slides[0].getBoundingClientRect().width;

slides.forEach((slide,index)=>{
    slides[index].style.left=slidemov*index+'px';
});

function sliding(current_s,target_s,movamount){
    carosel.style.transform='translateX(-'+movamount+')';
    current_s.classList.remove('current-slide');
    target_s.classList.add('current-slide');
}

rightbtn.addEventListener('click',(e)=>{
    const crotate=carosel.lastElementChild.getBoundingClientRect();
      
        if(crotate.top>=0&&
            crotate.left>=0&&
            crotate.right<=window.innerWidth
        ){
            carosel.style.transform='translateX('+0+'px'+')'
            document.querySelector('.current-slide').classList.remove('current-slide');
            carosel.firstElementChild.classList.add('current-slide');
    }
    else{
    const currentslide=track.querySelector('.current-slide');
    const nextslide=currentslide.nextElementSibling;
    const tomov=nextslide.style.left;
    sliding(currentslide,nextslide,tomov);
    }
})
leftbtn.addEventListener('click',(e)=>{
    const crotate=carosel.firstElementChild.getBoundingClientRect();
    
     if(crotate.top>=0&&
         crotate.left>=0&&
         crotate.right<=window.innerWidth
     ){
         const thismove=carosel.lastElementChild.style.left
         carosel.style.transform='translateX(-'+thismove+')'
         document.querySelector('.current-slide').classList.remove('current-slide');
         carosel.lastElementChild.classList.add('current-slide');
 }
 else{

    const currentslide=track.querySelector('.current-slide');
    const preslide=currentslide.previousElementSibling;
    const tomov=preslide.style.left;
    sliding(currentslide,preslide,tomov);

 }

});

