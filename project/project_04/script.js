const hello = document.querySelector('.hello');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const body = document.querySelector('body');
const startcolor = document.querySelector('.startcolor');
const stopcolor = document.querySelector('.stopcolor');
const startimage = document.querySelector('.startimage');
const stopimage = document.querySelector('.stopimage');

let startbutton;

start.addEventListener('click', function () {
    startbutton = setTimeout(function () {
        hello.innerHTML = "shivam"
    }, 1000)
})

stop.addEventListener('click', function () {
    clearTimeout(startbutton)
})

// Random color generate

const randomcolor = function () {
    const char = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += char[Math.floor(Math.random() * 16)]
    }

    return color;
}

// Random Image generate

const image = [
    "https://picsum.photos/1200/800?random=1",
    "https://picsum.photos/1200/800?random=2",
    "https://picsum.photos/1200/800?random=3",
    "https://picsum.photos/1200/800?random=4",
    "https://picsum.photos/1200/800?random=5"
]

const randomimage = function () {
    const index = Math.floor(Math.random() * image.length)
    // console.log(index)
    return image[index]
}

let startimagebutton = null;

startimage.addEventListener('click', function () {
    if (startimagebutton !== null) return;
    startimagebutton = setInterval(function(){
        body.style.backgroundImage = `url(${randomimage()})`
        body.style.backgroundSize = 'cover'
        body.style.backgroundPosition = 'center'
        body.style.backgroundRepeat = "no-repeat";
    },1000)
})

stopimage.addEventListener('click',function(){
    clearInterval(startimagebutton);
    startimagebutton = null
})

let startcolorbutton = null;

startcolor.addEventListener('click', function () {
    if (startcolorbutton !== null) return;
    startcolorbutton = setInterval(function () {
        body.style.backgroundColor = randomcolor()
        // console.log(randomcolor())
    }, 1000)
})

stopcolor.addEventListener('click', function () {
    clearInterval(startcolorbutton)
    startcolorbutton = null;
})