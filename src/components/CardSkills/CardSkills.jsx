import { useRef } from "react";
import "./CardSkills.css";
import skills from "./skills";

const CardSkills = ({
  name,
  img,
  logoColor,
  bgColor,
  skillFan,
  handleSkillFan,
}) => {
  console.log(bgColor);
  const translateX =
    Math.floor(Math.random() * 18) * (Math.round(Math.random()) ? 1 : -1);
  const translateY =
    Math.floor(Math.random() * 6) * (Math.round(Math.random()) ? 1 : -1);
  const rotate =
    Math.floor(Math.random() * 9) * (Math.round(Math.random()) ? 1 : -1);

  const stagger = useRef({
    backgroundColor: bgColor,
    transform: `translateX(${translateX}%) translateY(${translateY}%) rotate(${rotate}deg)`,
  });

  return (
    <div className="each-card">
      <div
        className={
          skillFan ? "skill-fan skill-card-size-fan skill-card" : "skill-card"
        }
        style={stagger.current}
        onClick={handleSkillFan}
      >
        <div className="flex flex-col justify-around">
          <h3
            className={
              skillFan
                ? "mx-auto text-m xs:text-2xl sm:text-3xl md:text-4xl "
                : "mx-auto text-3xl sm:text-4xl md:text-5xl"
            }
            style={{ color: `${logoColor}` }}
          >
            {name}
          </h3>
          <div className="center-line"></div>
          <div
            className={
              skillFan
                ? "mx-auto text-5xl sm:text-6xl md:text-7xl"
                : "mx-auto text-7xl sm:text-8xl md:text-9xl"
            }
            style={{ color: `${logoColor}` }}
          >
            {img}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkills;
