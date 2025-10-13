const video = document.getElementById("video-principal"); 

video.addEventListener("loadedmetadata", () => {
  video.currentTime = 6; // muestra el segundo 6 como preview
});

