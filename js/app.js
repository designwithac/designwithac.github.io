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