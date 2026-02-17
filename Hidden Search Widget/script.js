const btn = document.querySelector('.btn');
const searchBar = document.querySelector('.search-bar');

btn.addEventListener('click', () => {
    searchBar.classList.toggle('expanded');
    if (searchBar.classList.contains('expanded')) {
        searchBar.focus();
    }
});
