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



function sendAjax() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText)
        };
    };
    xhttp.open('GET', '/',true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send()
}








































































































