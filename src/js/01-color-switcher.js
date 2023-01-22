
const btnStart = document.querySelector('.data-start');  
console.log(btnStart);
const btnStop = document.querySelector('.data-stop'); 
console.log(btnStop);



function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)  
  };
  console.log(generateColor());

   let timerColorRandomId = null;              
btnStart.addEventListener('click', () =>  {     
  
timerColorRandomId = setInterval( () => {document.body.style.backgroundColor = generateColor()    
}, 1000);



console.log(document.body.style.background);
console.log(generateColor());

btnStart.disabled = true;      
btnStop.disabled = false;        
}
);
btnStop.addEventListener('click', function () {    
      clearInterval(timerColorRandomId);
    
      btnStart.disabled = false ;  
      btnStop.disabled = true;  
      }
      );
  

for (let i=3; i>0; i--){
  const delay = i*1000;
  setTimeout( () => console.log(i), delay);
};
