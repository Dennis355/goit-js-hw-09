

const form = document.querySelector('.form'); 
form.addEventListener('submit', onFormSubmit);


function createPromise(position, delay)  {
   
     return  new Promise ( (resolve, reject ) =>  {
        const shouldResolve = Math.random() > 0.3;
          setTimeout ( () => {
           
          if (shouldResolve) {
            resolve({position, delay});
          } else {
           reject ({position, delay});
          }
          }, delay); 
          
      }); 
    };
      
         function onFormSubmit  (e) {
        e.preventDefault();
        const formEl = e.currentTarget.elements;
        let delay = formEl.delay.value;
        let delayStep= formEl.step.value;
        let amount = formEl.amount.value;
  
      

for (let i = 0; i <= amount; i++) {
    // delay += delayStep;
    createPromise(i, delay).then (({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   console.log(result);
    }).catch ( ({ position, delay }) => {
        console.log ( `❌ Rejected promise ${position} in ${delay}ms`);

    }
    );
    
 };
};
