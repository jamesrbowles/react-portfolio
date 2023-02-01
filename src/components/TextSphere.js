import React, { useEffect } from "react";

import "./TextSphere.css";

import TagCloud from "TagCloud";

const TextSphere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      let radii;
      const texts = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "NodeJS",
        "ES6",
        "GIT",
        "GITHUB",
        "Tailwind",
        "Three.js",
      ];

      function radiusValue() {
        if (window.screen.width <= 778) {
          radii = 150;
        } else {
          radii = 290;
        }
        return radii;
      }

      const options = {
        radius: radiusValue(),
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };
      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <div className="text-sphere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextSphere;
