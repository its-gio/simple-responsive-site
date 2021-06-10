// https://www.youtube.com/embed/NBppslasYOM?autoplay=1&mute=1
let modal = document.querySelector("#modal");
const iframe = modal.querySelector("iframe");

function toggleModal() {
  modal.classList.toggle("active");
  modal.classList.contains("active") ?
    iframe.src = "https://www.youtube.com/embed/NBppslasYOM?autoplay=1&mute=1" :
    iframe.src = "#";
}