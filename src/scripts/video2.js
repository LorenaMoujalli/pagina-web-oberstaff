export function initVideoPrincipalDesktop() {
  (function() {
    const video = document.getElementById("video-principal-desktop"); 
    

    if (!video) return;

    video.addEventListener("loadedmetadata", () => {
      video.currentTime = 19; 
    });

   
  })();
}
