import { useEffect } from "react";
import lottie from "lottie-web";

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
      path: "/animations/Globe.json",
    });

    return () => anim.destroy();
  }, []);

  return null;
}
