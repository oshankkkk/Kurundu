import { useEffect, useRef } from "react";
import Benefits from "./benefits.jsx";
import "./cinnSoGud.css";
import { useGSAP } from "@gsap/react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import BloodSugarIcon from '/public/bloodSugar.svg';
import BloodSugarIcon from "/public/bloodSuger.svg?react";
import BrainBoost from "/public/brainBoost.svg?react";
import HeartHealth from "/public/heartHealth.svg?react";
import AntiBiotics from "/public/antibiotic.svg?react";
import GutHealth from "/public/gutHealth.svg?react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function CinSoGud() {
  // const benefitList = benerfitObj.benefits;
  const cardWrapperRef = useRef();
  const cardWrapperEnd = useRef();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: cardWrapperRef.current, // Trigger when first card hits top
      start: "top 10%", // When top of first card hits top of viewport
      endTrigger: cardWrapperEnd.current,
      end: "bottom 30%",
      pin: ".topic-text", // Pin the wrapper
      pinSpacing: false,
      scrub: true,
      id: "pin-trigger",
    });
  }, []);
  let benefits = [
    {
      title: "Regulates Blood Sugar",
      description:
        "Helps lower blood glucose and improve insulin sensitivity – ideal for managing diabetes naturally.",
    },
    {
      title: "Packed with Antioxidants",
      description:
        "Fights free radicals with powerful polyphenols to protect your cells from damage.",
    },
    {
      title: "Reduces Inflammation",
      description:
        "Cinnamaldehyde in Ceylon cinnamon may ease chronic inflammation and support joint health.",
    },
    {
      title: "Supports Heart Health",
      description:
        "May help reduce bad cholesterol while maintaining healthy blood pressure.",
    },
    {
      title: "Better Than Cassia Cinnamon",
      description:
        "Unlike Cassia, Ceylon cinnamon is softer in texture, easier to grind, and healthier for your body – truly the superior choice for both taste and wellness.",
    },
    {
      title: "Delicate, Sweet & Safe",
      description:
        "Ceylon cinnamon has a mild, refined flavor and contains very low levels of coumarin – making it safe for daily, long-term use.",
    },
  ];
  return (
    <>
      <div className="scroll-wrapper">
        <div className="topic-wrapper">
          <div className="topic-text">
            <h2>Ceylon Cinnamon </h2>
            <h3>Pure, Gentle, and Superior</h3>
          </div>
        </div>

        <div className="card-wrapper" ref={cardWrapperRef}>
          <Benefits benefit={benefits[0]}>
            <BloodSugarIcon className="benefits-svg-icons"></BloodSugarIcon>
          </Benefits>
        </div>

        <div className="card-wrapper">
          <Benefits benefit={benefits[1]}>
            <AntiBiotics className="benefits-svg-icons"></AntiBiotics>
          </Benefits>
        </div>

        <div className="card-wrapper">
          <Benefits benefit={benefits[4]}></Benefits>
        </div>

        <div className="card-wrapper" >
          <Benefits benefit={benefits[2]}>
            <GutHealth className="benefits-svg-icons"></GutHealth>
          </Benefits>
        </div>
        <div className="card-wrapperL" ref={cardWrapperEnd}>
          <Benefits benefit={benefits[3]}>
            <HeartHealth className="benefits-svg-icons"></HeartHealth>
          </Benefits>
        </div>
      </div>
    </>
  );
}
