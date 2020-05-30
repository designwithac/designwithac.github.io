//get all necessary elements
const navLinkEl = document.querySelectorAll('.navbar__link');
const searchBttn = document.getElementById('search-icon');
const input = document.getElementById('country__input');


//add event listeners
navLinkEl.forEach(navItem => {
    navItem.addEventListener('click', function(){
        let currentActive = document.querySelector('.navbar__link--active');
        console.log(currentActive.classList);
        currentActive.classList.remove('navbar__link--active');
        console.log(currentActive.classList);

        navItem.classList.add('navbar__link--active');
    });
})

searchBttn.addEventListener('click', toggleCountrySearch);

function toggleCountrySearch(){
    input.parentElement.classList.toggle('hide');
}

// functions
