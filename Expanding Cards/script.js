// Using DOM

const panels = document.querySelectorAll('img')

for (let i = 0; i < panels.length; i++) {
    panels[i].addEventListener('click', function () {
        removeActiveClass();
        this.classList.add('active');
    })
}

function removeActiveClass(){
    for (let i = 0; i < panels.length; i++) {
        panels[i].classList.remove('active');
    }
}


// Using jquery

// $('img').click(function(){
//     $('img').removeClass('active');
//     $(this).addClass('active')
// })
