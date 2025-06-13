import { useEffect, useRef } from "react";
import Benefits from "./benefits.jsx";
import "./cinnSoGud.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import BloodSugarIcon from '/public/bloodSugar.svg';

gsap.registerPlugin(ScrollTrigger);

export default function CinSoGud() {
  // const benefitList = benerfitObj.benefits;
  const cardWrapperRef = useRef();
  const cardWrapperEnd = useRef();

  useEffect(() => {
    ScrollTrigger.create({
      trigger: cardWrapperRef.current, // Trigger when first card hits top
      start: "top 10%", // When top of first card hits top of viewport
      endTrigger: cardWrapperEnd.current,
      end: "bottom 10%",
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
      title: "Fights Bacteria & Fungi",
      description:
        "Naturally defends against harmful bacteria and fungal infections – even helps preserve food.",
    },
    {
      title: "Delicate, Sweet & Safe",
      description:
        "Ceylon cinnamon has a mild, refined flavor and contains very low levels of coumarin – making it safe for daily, long-term use.",
    },
    {
      title: "Better Than Cassia Cinnamon",
      description:
        "Unlike Cassia, Ceylon cinnamon is softer in texture, easier to grind, and healthier for your body – truly the superior choice for both taste and wellness.",
    },
  ];
  return (
    <>
      <div className="scroll-wrapper">
        <div className="topic-wrapper">
          <div className="topic-text">
            <h2>Ceylon Cinnamon </h2>
            <h3>
Pure, Gentle, and Superior
                          </h3>
          </div>
        </div>

        <div className="card-wrapper" ref={cardWrapperRef}>
          <Benefits benefit={benefits[0]}></Benefits>
          <Benefits benefit={benefits[1]}></Benefits>
        </div>

        <div className="card-wrapper">
          <Benefits benefit={benefits[4]}></Benefits>
        </div>
        <div className="card-wrapper" ref={cardWrapperEnd}>
          <Benefits benefit={benefits[2]}></Benefits>
          <Benefits benefit={benefits[3]}></Benefits>
        </div>

      </div>
    </>
  );
}
