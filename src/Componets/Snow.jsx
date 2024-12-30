import React, { useEffect } from "react";

const SnowAnimation = () => {
  useEffect(() => {
    // CDN orqali Snow.js faylini yuklaymiz
    const script = document.createElement("script");
    script.src = "https://app.embed.im/snow.js";
    script.async = true;

    // Snow.js fayli yuklangach, animatsiyani ishga tushiramiz
    script.onload = () => {
      new Snow();
    };

    document.body.appendChild(script);

    // Tozalash (komponent unmount bo'lganda)
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Komponent DOM element qaytarmaydi
};

export default SnowAnimation;
