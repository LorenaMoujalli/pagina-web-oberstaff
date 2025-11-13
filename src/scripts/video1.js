export function initVideoPrincipal() {
  (function() {
    const video = document.getElementById("video-principal"); 
   

    if (!video) return;

    video.addEventListener("loadedmetadata", () => {
      video.currentTime = 19; 
    });

    
  })();
}
