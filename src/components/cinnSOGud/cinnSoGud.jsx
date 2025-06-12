import { useEffect, useRef } from 'react';
import Benefits from "./benefits.jsx";
import "./cinnSoGud.css"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CinSoGud() {
  // const benefitList = benerfitObj.benefits;
  const cardWrapperRef= useRef();
  const cardWrapperEnd= useRef()

  useEffect(() => {
    ScrollTrigger.create({
      trigger:cardWrapperRef.current, // Trigger when first card hits top
      start: "top top", // When top of first card hits top of viewport
      endTrigger:cardWrapperEnd.current,
      end:"bottom 80%",
      pin:".topic-text", // Pin the wrapper
      // markers: true, // For debugging
      // animation:scrollTimeLine,
      pinSpacing:false,
      scrub:1,
      id: "pin-trigger"
    });

  
  }, []);
let benefits= [
    {
      title: "Regulates Blood Sugar",
      description: "Helps lower blood glucose and improve insulin sensitivity – ideal for managing diabetes naturally."
    },
    {
      title: "Packed with Antioxidants",
      description: "Fights free radicals with powerful polyphenols to protect your cells from damage."
    },
    {
      title: "Reduces Inflammation",
      description: "Cinnamaldehyde in Ceylon cinnamon may ease chronic inflammation and support joint health."
    },
    {
      title: "Supports Heart Health",
      description: "May help reduce bad cholesterol while maintaining healthy blood pressure."
    },
    {
      title: "Fights Bacteria & Fungi",
      description: "Naturally defends against harmful bacteria and fungal infections – even helps preserve food."
    },{
  title: "Delicate, Sweet & Safe",
  description: "Ceylon cinnamon has a mild, refined flavor and contains very low levels of coumarin – making it safe for daily, long-term use."
},
{
  title: "Better Than Cassia Cinnamon",
  description: "Unlike Cassia, Ceylon cinnamon is softer in texture, easier to grind, and healthier for your body – truly the superior choice for both taste and wellness."
}

  ]
  return (
    <>
      <div className="scroll-wrapper" >
        <div className='topic-text'>
          Ceylon Cinnamon: Pure, Gentle, and Superior
          {/* <h2>Ceylon Cinnamon: Pure, Gentle, and Superior</h2>
          <h3>Experience the mild, safe sweetness of Ceylon cinnamon — softer, healthier, and better than Cassia for daily enjoyment and well-being.</h3> */}
        </div>

        <div className='card-wrapper' ref={cardWrapperRef}>
          <Benefits
          benefit={benefits[2]}
          ></Benefits>
          <Benefits
          benefit={benefits[3]}
          ></Benefits>
 
        </div>
        <div className='card-wrapper'>
          <Benefits
          benefit={benefits[4]}
          ></Benefits>
          <Benefits
          benefit={benefits[0]}
          ></Benefits>
        </div>
        <div className='card-wrapper'>
          <Benefits
          benefit={benefits[1]}
          ></Benefits>
        </div>
        <div className='card-wrapper' ref={cardWrapperEnd}>
          <Benefits
          benefit={benefits[5]}
          ></Benefits>
 <Benefits
          benefit={benefits[5]}
          ></Benefits>
        </div>



      </div>
    </>
  )
}