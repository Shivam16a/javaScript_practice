const hello = document.querySelector('.hello');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');


let startbutton;

start.addEventListener('click', function () {
    startbutton = setTimeout(function () {
        hello.innerHTML = "shivam"
    }, 1000)
})

stop.addEventListener('click',function(){
    clearTimeout(startbutton)
})