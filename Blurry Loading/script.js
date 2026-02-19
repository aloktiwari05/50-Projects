const count = document.querySelector('.count');
const image = document.querySelector('.image');

function unBlur() {
    for (let i = 0; i <= 100; i++) {
        setTimeout(function () {
            count.innerHTML= `${i}%`
            count.style.filter = `blur(${i/100*20}px)`;
            image.style.filter = `blur(${20 - i * 0.2}px)`;
            if( i == 100)
        {
            count.innerText= '';
        }
        }, i * 20);

    }
}

if(image.complete){
    unBlur();
}
else{
    image.addEventListener('load', unBlur);
}

