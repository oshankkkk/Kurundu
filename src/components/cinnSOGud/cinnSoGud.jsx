import { useEffect, useRef } from 'react';
import Benefits from "./benefits.jsx";
import "./cinnSoGud.css"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import benerfitObj from "./benefits.json"

gsap.registerPlugin(ScrollTrigger);

export default function CinSoGud() {
  // const benefitList = benerfitObj.benefits;
  const cardWrapperRef= useRef();
  const cardWrapperEnd= useRef()

  useEffect(() => {


    ScrollTrigger.create({
      trigger:cardWrapperRef.current, // Trigger when first card hits top
      start: "top top", // When top of first card hits top of viewport
      end:()=>{
 const div2Bottom =cardWrapperEnd.current.getBoundingClientRect().bottom;
        const viewportCenter = window.innerHeight / 2;
        const distanceFromTrigger = div2Bottom - viewportCenter;
        return `+=${distanceFromTrigger}`;
      }, // Adjust as needed
      pin:".scroll-text", // Pin the wrapper
      pinSpacing: false,
      // markers: true, // For debugging
      // animation:scrollTimeLine,
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
    }
  ]
  return (
    <>
      <div className="dummy-div">hi</div>
      <div className="scroll-wrapper" >
        <div className='scroll-text'>
          Why should we eat cinnamon
        </div>

        <div className='card-wrapper1' ref={cardWrapperRef}>
          <Benefits
          benefit={benefits[2]}
          ></Benefits>
        </div>
        <div className='card-wrapper'>
          <Benefits
          benefit={benefits[3]}
          ></Benefits>
        </div>
        <div className='card-wrapper'>
          <Benefits
          benefit={benefits[4]}
          ></Benefits>
        </div>
        <div className='card-wrapper'>
          <Benefits
          benefit={benefits[0]}
          ></Benefits>
        </div>
        <div className='card-wrapper2' ref={cardWrapperEnd}>
          <Benefits
          benefit={benefits[1]}
          ></Benefits>
        </div>


      </div>
      <div className="dummy-div">hi</div>
    </>
  )
}