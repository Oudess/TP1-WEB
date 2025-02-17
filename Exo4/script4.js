function getRandomColor(){
    let Color="0123456789ABCDEF";
    let RGB="#";
    for(let i=0;i<6;i++){
        RGB=RGB+Color[Math.floor(Math.random()*16)];
    }
    return RGB;
}


document.querySelectorAll("#myList li p").forEach(item => {
    item.addEventListener("click", function() {
        this.style.color = getRandomColor();
    });
});