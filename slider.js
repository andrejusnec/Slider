 let slides = document.querySelectorAll('.slide-single');
 let slider = [];
 let wrapper = document.querySelector('#slide')
console.log(wrapper)
 for(let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src;
    slides[i].remove();
 }

 let step = 0;
 let onMove = true;
 //let offset = 0;

 function draw(offset) {
     let img = document.createElement('img');
     img.src = slider[step];
     img.classList.add('slide-single');
     img.style.left = offset*300 +'px';
     document.querySelector('#slide').appendChild(img);
     step++;
     if(step === slider.length) {
         step = 0;
     }
 } 
 
 function left() {
     let slides2 = document.querySelectorAll('.slide-single');
     let offset2 = 0;
     console.log()
     slides2[0].style.left = -300 + 'px';
     setTimeout(function() {
     slides2[0].remove();
     }, 2000);
     
     for(let i = 1; i < slides2.length; i++) {
         slides2[i].style.left = offset2*300 + 'px'; 
         offset2++;
     }
     setTimeout(function(){
        draw(3);
     }, 2000);
 }
 draw(0);draw(1);draw(2); draw(3);
 
 setInterval(function(){ left() }, 6000);