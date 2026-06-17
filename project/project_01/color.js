const body = document.querySelector('.bgbd');

const coldiv = document.querySelectorAll('.col');

// console.log(coldiv);

coldiv.forEach((col)=>{
    const allcolordiv = document.querySelector(`#${col.id}`)
    
    allcolordiv.addEventListener('click',()=>{
        body.style.backgroundColor = `${allcolordiv.id}`
    })
})
