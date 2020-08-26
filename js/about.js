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