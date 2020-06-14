const tabItem = document.querySelectorAll('.category__item');
const tabContentItem = document.querySelectorAll('.tab__content-item');
console.log(tabItem);

tabItem.forEach(item => {
    item.addEventListener('click', addActiveStatus);
});

function removeActiveStatus(){
    tabItem.forEach(item => {
        item.classList.remove('portfolio__category--active');
    });
}
function removeShowTabContent(){
    tabContentItem.forEach(item => {
        item.classList.remove('show');
    });
}

function addActiveStatus(e){
    removeActiveStatus();
    removeShowTabContent();
    this.classList.add('portfolio__category--active');

    // console.log(this.id);
    console.log(`${this.id}-content`);
    const tabContentEl = document.querySelector(`#${this.id}-content`)
    tabContentEl.classList.add('show');
}