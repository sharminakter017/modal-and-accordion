
const apply = document.querySelector('#apply');
const modal = document.querySelector('.haq-modal');
const close = document.querySelector('.close');
const alert = document.querySelector('.hoq-alert');
const aclose = document.querySelector('.hoq-alert .close');
const keep = document.querySelector('#keep');
const dis = document.querySelector('#discard');

apply.addEventListener('click', function(){
  modal.style.display = 'flex';
  modal.style.opacity = '1';
  modal.style.transform = 'translateY(0px)'
  modal.style.pointerEvents = 'auto';
 
  

});

close.addEventListener('click', function(){
  // modal.style.opacity = '0';
  // modal.style.transform = 'translateY(-100px)'
  // modal.style.pointerEvents = 'none';

  alert.style.display = 'flex';
});


modal.addEventListener('click', function(e){

  if(e.target == this){
    modal.style.opacity = '0';
    modal.style.transform = 'translateY(-100px)'
    modal.style.pointerEvents = 'none';

  }
 
});

aclose.addEventListener('click', function(){
 
  alert.style.display = 'none';

})

keep.addEventListener('click', function(){
 
  alert.style.display = 'none';

});

dis.addEventListener('click', function(){
 
  modal.style.display = 'none';
  alert.style.display = 'none';

});







// Accordion-header===============>


const acc_header = document.querySelectorAll('.accordion-header');


  acc_header.forEach(item =>{
  item.addEventListener('click', function(){
    item.classList.toggle('active');
    

   if(item.classList.contains('active')){
    item.nextElementSibling.style.height =  item.nextElementSibling.scrollHeight + 'px';

   }else{
    item.nextElementSibling.style.height = '0'
   }



  });
});







 
 






