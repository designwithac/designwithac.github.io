// document.addEventListener('DOMContentLoaded', function(){
//    let mouseXpos, mouseYpos;  
   let cursor = document.getElementById('cursor');
   let hoverComponents = document.querySelectorAll('.mousehover');

   document.addEventListener("mousemove", function(e){
    let mouseXpos = e.clientX;
    let mouseYpos = e.clientY;
    cursor.style.left = mouseXpos+"px";
    cursor.style.top = mouseYpos+"px";

    hoverComponents.forEach(item => {
        item.addEventListener("mouseover", function(){
            cursor.classList.add('cursor-hovered');
        })
        item.addEventListener("mouseleave", function(){
            cursor.classList.remove('cursor-hovered');
        })
    })
    // console.log(cursor);
});
// });


const hireMeBttn = document.querySelector('.landing__link--main');
const hireOptions = document.querySelector('.hire-options');
const copyEmail = document.getElementById('copy-email');

hireMeBttn.addEventListener('mouseenter', showHireOptions);
hireMeBttn.addEventListener('mouseleave', hideHireOptions);
copyEmail.addEventListener('click', copyEmailToClipboard);

function showHireOptions(){
    hireOptions.classList.add('show');
}
function hideHireOptions(){
    hireOptions.classList.remove('show');
}

function copyEmailToClipboard(){
    // copyEmail.select();
    // const hireMeBttn = document.querySelector('.landing__link--main');

    document.execCommand('copy');
    console.log('copied value is : '+ hireMeBttn.textContent);
}