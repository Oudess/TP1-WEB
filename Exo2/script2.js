const colorInput=document.getElementById("colorPicker");
const sizeInput=document.getElementById("sizePicker");
const fontInput=document.getElementById("fontPicker");
const text=document.getElementById("text");
colorInput.addEventListener("input",()=>{
    text.style.color=colorInput.value;
});
sizeInput.addEventListener("input",()=>{
    text.style.fontSize=sizeInput.value+"px";
});
fontInput.addEventListener("input",()=>{
    text.style.fontFamily=fontInput.value;
});