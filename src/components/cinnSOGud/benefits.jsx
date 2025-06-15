import "./benefits.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Benefits({ benefit, children }) {
  const cardRef = useRef();

  useGSAP(() => {
    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
      },
      y: 60,
      duration: 1,
      ease: "power2.out",
    });
  }, { scope: cardRef });

  return (
    <div className="support-card" ref={cardRef}>
      <div className="card-icon">{children}</div>
      <h2 className="card-title">{benefit.title}</h2>
      <p className="card-description">{benefit.description}</p>
    </div>
  );
}

export default Benefits;
