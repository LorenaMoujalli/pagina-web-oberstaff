import { useEffect } from "react";
import lottie from "lottie-web";
import "../styles/globo.css"

export default function GlobeLottie() {
  useEffect(() => {
    const container = document.getElementById("globe-container");

    if (!container) {
      console.error("No se encontró #globe-container");
      return;
    }

    const anim = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/GlobeWorld.json",
    });

    return () => anim.destroy();
  }, []);

  return <div id="globe-container" className="globe"></div>;
}

