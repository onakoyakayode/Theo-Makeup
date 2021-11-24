const button = document.getElementById('toggle-button');

button.addEventListener('click', function() {
    const navList = document.getElementById('navlist');
    if (navList.classList.contains('navbar-links')) {
        navList.classList.remove('navbar-links');
    } else {
        navList.classList.add('navbar-links')
    }
});


