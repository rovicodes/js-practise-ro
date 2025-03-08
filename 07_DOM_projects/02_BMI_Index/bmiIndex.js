const form = document.querySelector('form')
document.querySelector('#results').innerHTML = ""

form.addEventListener('submit',function (eventObj) {
    eventObj.preventDefault(); // this will stop the default submit operations of sending data via post or get, so that we can calculate in between

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');
    

    if(height === '' || height <= 0 || isNaN(height)){
        results.innerHTML = "enter a valid height"
    }else 
    if (weight === '' || weight <= 0 || isNaN(weight)){
        results = "enter a valid weight"
    }else{
       const bmi = (weight / ((height*height)/10000)).toFixed(2)
       let bmiFeedback;
       if(bmi <= 18.6)
       {
          bmiFeedback = "Under Weight"
       }
       else if(bmi > 18.6 && bmi <= 24.9)
       {
          bmiFeedback = "in Normal range"
       }
       else if (bmi > 24.9) {
        bmiFeedback = "overweight"
       }
       results.innerHTML = `<span>${bmi}, you are ${bmiFeedback}</span>`;
    }
    
})
