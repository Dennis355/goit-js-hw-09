

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
        let delay = Number(formEl.delay.value);
        let delayStep = Number(formEl.step.value);
        console.log('delayStep', delayStep);
        let amount = Number(formEl.amount.value);
  
      

for (let i = 0; i <= amount; i++) {
    
    createPromise(i, delay).then (({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   console.log(result);
    }).catch ( ({ position, delay }) => {
        console.log ( `❌ Rejected promise ${position} in ${delay}ms`);

    }
    );
    delay = delay + delayStep;
 };

};
