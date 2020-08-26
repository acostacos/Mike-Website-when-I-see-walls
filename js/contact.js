const imgChange = document.getElementById("change-img");
const radio1 = document.getElementById("radioimage1");
const radio2 = document.getElementById("radioimage2");
const radio3 = document.getElementById("radioimage3");

function changeBgImg(e) {
    if(radio1.checked){
        imgChange.style.backgroundImage = "url(../img/26.jpg)";
    }
    else if(radio2.checked){
        imgChange.style.backgroundImage = "url(../img/5.jpg)";
    }
    else if (radio3.checked){
        imgChange.style.backgroundImage = "url(../img/7.jpg)";
    }
}

radio1.addEventListener("change", changeBgImg);
radio2.addEventListener("change", changeBgImg);
radio3.addEventListener("change", changeBgImg);
radio1.checked = true;

function openNav(){
    document.getElementById("sidenav").style.width = "100vw";
    document.querySelectorAll(".sidenav-item").forEach(element => {
        element.style.opacity = 1;
    });
}

function closeNav(){
    document.getElementById("sidenav").style.width = "0";
    document.querySelectorAll(".sidenav-item").forEach(element => {
        element.style.opacity = 0;
    });
}

// function changeOnMouse(e) {
//     let xcoor = e.x;
//     let width = imgChange.offsetWidth;

//     if(xcoor < width/3){
//         imgChange.style.backgroundImage = "url(../img/7.jpg)"
//     }
//     else if(xcoor < width * (2/3)){
//         imgChange.style.backgroundImage = "url(../img/5.jpg)"
//     }
//     else{
//         imgChange.style.backgroundImage = "url(../img/26.jpg)"
//     }
// }

// imgChange.addEventListener("mousemove", changeOnMouse);