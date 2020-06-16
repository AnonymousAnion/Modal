// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

let modalBtn = document.querySelector(".modal-btn");
let modal = document.querySelector(".modal-overlay");
let closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function() {

    console.log(modal.classList)

    modal.classList.toggle("open-modal");
})

closeBtn.addEventListener("click", function() {

    modal.classList.remove("open-modal");
})