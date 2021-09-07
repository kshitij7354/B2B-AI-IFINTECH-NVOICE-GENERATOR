var button1 = document.querySelector('.button1');
var modalbg1 = document.querySelector('.modal-bg1');
var closebutton1 = document.querySelector('.modal-close1');



var button2 = document.querySelector('.button2');
var modalbg2 = document.querySelector('.modal-bg2');
var closebutton2 = document.querySelector('.modal-close2');


var button3 = document.querySelector('.button3');
var modalbg3 = document.querySelector('.modal-bg3');
var closebutton3 = document.querySelector('.modal-close3');


button1.addEventListener('click', ()=>{
   modalbg1.classList.add('bg-active1')
});

closebutton1.addEventListener('click', ()=>{
    modalbg1.classList.remove('bg-active1')
});



button2.addEventListener('click', ()=>{
    modalbg2.classList.add('bg-active2')
 });
 closebutton2.addEventListener('click',()=>{
     modalbg2.classList.remove('bg-active2')
 });

 button3.addEventListener('click',()=>{
     modalbg3.classList.add('bg-active3');
})
closebutton3.addEventListener('click',()=>{
    modalbg3.classList.remove('bg-active3');
})
 