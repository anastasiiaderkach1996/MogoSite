let header = document.getElementById("header1");
let introHeight = document.getElementById("intro").scrollHeight;
let scrollOffset = 0;
let originalClasses = header.className;
window.addEventListener('scroll', toggleHeaderFixed)
function toggleHeaderFixed(){
    scrollOffset = window.scrollY;
    if (scrollOffset >= introHeight){
        header.className = originalClasses + ' fixed';
    } else {
        header.className = originalClasses;
    }
    console.log(scrollOffset)
}
toggleHeaderFixed()









































































































