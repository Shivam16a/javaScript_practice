const clock = document.querySelector('.clock');

const p = document.createElement('p');
p.setAttribute('id', 'time')
// const disptime = document.getElementsByName("p");
p.style.color = 'white'
// p.style.fontSize = '20px'
clock.appendChild(p)
const disptime = document.querySelector('#time')
disptime.style.textTransform = "uppercase";
// console.log(disptime)

setInterval(() => {
    const date = new Date;
    disptime.innerHTML = `${date.toLocaleTimeString('en-IN',{hour12:true})}`
}, 1000)