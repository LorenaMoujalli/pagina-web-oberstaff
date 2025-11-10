/*  video = document.getElementById("video-principal"); 

video.addEventListener("loadedmetadata", () => {
  video.currentTime = 17; 
}); 

*/


const video = document.getElementById("video-principal"); 
const playBtn = document.getElementById("videoPlayBtn");  
const caption = document.getElementById("videoCaption");

// Muestra el segundo 20 como preview
video.addEventListener("loadedmetadata", () => {
  video.currentTime = 19; 
});                                       


/*

// Reproduce cuando se hace clic en el botón
playBtn.addEventListener("click", () => {
  video.play();
});

// Oculta el botón y frase al reproducir
video.addEventListener("play", () => {
  playBtn.style.display = "none";
  caption.style.opacity = "0";
});

// Muestra nuevamente botón y frase al pausar
video.addEventListener("pause", () => {
  playBtn.style.display = "flex";
  caption.style.opacity = "1";
});

*/