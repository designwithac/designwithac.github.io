import {recipes} from './dummy-data.js';
// console.log(recipes);

let ingredients = [
    "tomato",
    "garlic",
    "chicken",
    "cilantro",
    "cumin",
    "sauce"
]

let ingItems = document.querySelectorAll(".different__lists");
const pot = document.querySelector(".pot");
const getSuggestionBtn = document.getElementById('get-suggestion');
const foodSuggestion = document.querySelector('.food__suggestions')
var potList = [];
// const defaultIngredients = dummyData.defaultIngredients;
// const differentIngredients = dummyData.differentIngredients;

// for(let i = 0; i < ingredients.length; i++){
//     let li = document.createElement('li');
//     li.classList.add('different__item');
//     li.setAttribute("draggable", "true");
//     li.textContent = ingredients[i];
//     console.log(li);
//     // console.log(ingItems);
//     ingItems.appendChild(li);
// }

getSuggestionBtn.addEventListener('click', getFoodSuggestion);

ingItems.forEach(item => {

    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
})

pot.addEventListener('dragover', dragOver);
pot.addEventListener('dragleave', dragLeave);
pot.addEventListener('drop', drop);
// pot.addEventListener('drage', dragEnd);

function dragStart(e){
    e.dataTransfer.setData("text", e.target.textContent);
    e.target.classList.add("drag-start");
}
function dragEnd(e){
    e.target.classList.remove("drag-start");
}
function dragOver(e){
    e.preventDefault();
    pot.classList.add("item-hovered");
}
function dragLeave(e){
    e.preventDefault();
    pot.classList.remove("item-hovered");
}
function drop(e){
    e.preventDefault();
    pot.classList.remove("item-hovered");

    const itemText = e.dataTransfer.getData("text");

    const potList = document.createElement('li');
    potList.textContent = itemText;
    potList.classList = "default__item";

    pot.appendChild(potList);
}
// function checkFoodSuggestions(pot){
//     console.log(pot);
//     // pot.forEach(item => {
//     //     console.log(item.textContent);
//     // })
// }


function getFoodSuggestion(e){
    e.preventDefault();
    let potItems = pot.children;
    let arr = [];
    if(potItems.length >= 0){
        for(let i = 0; i < potItems.length; i++ ){
            // console.log(potItems[i].textContent);
            arr.push(potItems[i].textContent)
        }
    }else{
        console.log("empty....")
    }
    renderSuggestion(arr);
}


function renderSuggestion(arr){
    // console.log(recipes);
    //compare if the dragged ingredients matched
    //with the default ingredient list
    let foodSuggestions = [];

    Object.entries(recipes).map(item => {
        let foodItem = item[1];
        if(findCommonIngredients(foodItem.ingredients, ingredients)){
            foodSuggestions.push(foodItem.title);
        }
    });

    foodSuggestions.map(item => {
        let foodDiv = document.createElement("div");
        foodDiv.classList.add("suggested__food");   
        foodDiv.textContent = item;

        foodSuggestion.appendChild(foodDiv);
    })
}

function findCommonIngredients(foodIngrediends, allIngredients){
    return allIngredients.some(item => foodIngrediends.includes(item));
}