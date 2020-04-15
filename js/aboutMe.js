const progressBarArray = document.querySelectorAll(".progres");
for (let i =0 ; i < progressBarArray.length; i++) {
    progressBarArray[i].style.width = progressBarArray[i].dataset.width + "%"
    progressBarArray[i].insertAdjacentHTML ( "beforeend",`<div class= "progress-bar-proc"> ${progressBarArray[i].dataset.width}% </div>`);
}
document.querySelector('.btn-white').addEventListener("click", function(){
    document.querySelector('.contact_us').scrollIntoView(
        {behavior: "smooth"
         }
    );
})