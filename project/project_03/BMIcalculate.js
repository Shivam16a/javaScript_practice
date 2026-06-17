const height = document.getElementById("height")
const Weight = document.getElementById("Weight")

const form = document.querySelector('.frm');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const calculationresult = (parseInt(Weight.value)*10000) / (parseInt(height.value)*parseInt(height.value));
    // console.log(calculationresult.toFixed(2));
    const result = document.querySelector('.result');
    result.style.textAlign = 'center'
    result.style.margin = '10px'
    if(parseInt(calculationresult) <= 18 ){
        result.innerHTML = `${calculationresult.toFixed(2)} : Underweight`
        result.style.color = 'orange'
    }
    if(parseInt(calculationresult) >= 18 && parseInt(calculationresult)<= 25){
        result.innerHTML = `${calculationresult.toFixed(2)} : Normal`
        result.style.color = 'green'
    }
    if(parseInt(calculationresult) >= 25){
        result.innerHTML = `${calculationresult.toFixed(2)} : Overweight`
        result.style.color = 'red'
    }
})