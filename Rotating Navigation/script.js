const container = document.querySelector('.container');

function rotateHam(e){
    container.classList.toggle('show-nav');
    console.log(container.className, e);
}

container.addEventListener('click', rotateHam);