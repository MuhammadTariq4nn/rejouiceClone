
function cursorEffect(){
   let page=document.querySelector('.page');
let page2=document.querySelector('.page2');
let cursor=document.querySelector('.cursor');

page.addEventListener('mousemove',function(e){
   // cursor.style.left=e.x+"px"
   // cursor.style.top=e.y+"px";
   gsap.to(cursor,{
      x: e.x,
      y: e.y,
   }) 
})



page.addEventListener('mouseenter',function(e){
   cursor.style.scale="1"
})


page.addEventListener('mouseleave',function(e){
   cursor.style.scale="0"
})
}
cursorEffect()


gsap.to(".pintrest",{
   // transform: "translateX(-260%)",
   duration:1,
   scale:1,
   opacity:0,
   // stagger:true,
   ease:"power4.out",
   scrollTrigger:{
       trigger:".pintrest",
       scroller:"body",
       markers:true,
       start:"top 60%",
       // end:"top -100%",
       
       // scrub:5,
       // pin:true
   }
})
gsap.from('.page2 .part2 h1',{
   opacity :0,
   y:50,
   stagger:0.2,
   duration:0.5,
   // ease:"power3.out",
   scrollTrigger :{
      trigger:'.page2 .part2 h1' ,
      scroller:'body',
      markers:true,
      start: 'top 0%',
      // end:'bottom 86%',
      
      // scrub:2    
   }
})


var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
 });



 let tl=gsap.timeline();

 tl.from('.loader h1',{
   x:	40,
   opacity:0,
   duration:0.8,
   // stagger:0.1
 })

 tl.to('.loader h1',{
   opacity:0,
   x:-40,
   duration:2,
   
 })
 tl.to('.loader',{
   opacity:0,
 })
 tl.to('.loader',{
   display:"none"
 })
 tl.from('.pageContent .heading h1 span',{
   y:	100,
   opacity:0,
   stagger:0.1
   // duration:0.8,
   // stagger:0.1
 })