const searchIcon = document.querySelector('.search-icon');
const searchBar = document.querySelector('.search-bar');

function searchTransition(e){
    searchBar.classList.toggle('hidden');
}

searchIcon.addEventListener('click',searchTransition);