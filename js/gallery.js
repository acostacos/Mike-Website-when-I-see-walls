let gallery = document.querySelector('.gallery');
let mouseEnterEvent = function(e){
    this.firstChild.style.filter = 'brightness(50%)';
    this.firstChild.style.transform = 'scale(1.2)';
    this.lastChild.style.opacity = '100%';
};
let mouseLeaveEvent = function(e){
    this.firstChild.style.filter = 'brightness(100%)';
    this.firstChild.style.transform = 'scale(1)';
    this.lastChild.style.opacity = '0';
}
let onClickEvent = function(e){
    let showImg = document.querySelector('.show-img');
    showImg.src = `./img/${this.id}-min.jpg`;
    let showcase = document.querySelector('.showcase');
    showcase.style.visibility = 'visible';
}
let clickExit = function(e){
    this.style.visibility = 'hidden';
}

let showcase = document.querySelector('.showcase');
showcase.addEventListener('click', clickExit);

for(let i=1; i<=33; i++){
    let outerDiv = document.createElement('div');
    outerDiv.className = "image-container";
    outerDiv.id = i;
    outerDiv.addEventListener('mouseover', mouseEnterEvent);
    outerDiv.addEventListener('mouseleave', mouseLeaveEvent);
    outerDiv.addEventListener('click', onClickEvent);

    let innerDiv = document.createElement('div');
    innerDiv.className = "image";
    innerDiv.style.backgroundImage = `url('./img/${i}-min.jpg')`;

    let innerText = document.createElement('p');
    innerText.className = "image-text";
    innerText.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, sequi.';
    
    outerDiv.appendChild(innerDiv);
    outerDiv.appendChild(innerText);
    gallery.appendChild(outerDiv);
}

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