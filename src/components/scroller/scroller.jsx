// import "./scroller.css";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);
// export default function Scroller() {
//   const scroller = useRef(null);

//   useEffect(() => {
//     const scrollerEl = scroller.current;
//     const texts = Array.from(scrollerEl.children);

//     // Clone texts for infinite loop
//     texts.forEach((text) => {
//       const clone = text.cloneNode(true);
//       scrollerEl.appendChild(clone);
//     });

//     const totalWidth = scrollerEl.scrollWidth / 2;

//     gsap.to(scrollerEl, {
//       x: `-=${totalWidth}`,
//       duration: 15,
//       ease: "none",
//       repeat: -1,
//       modifiers: {
//         x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
//       },
//     });
//   }, []);

//   return (
//     <div className="container">
//       <div className="scroller" ref={scroller}>
//         <div className="scroll-text">Directly from Estate</div>
//         <div className="scroll-text">Directly from Estate</div>
//         <div className="scroll-text">Directly from Estate</div>
//         <div className="scroll-text">Directly from Estate</div>
//       </div>
//     </div>
//   );
// }
import "./scroller.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Scroller() {
  const scroller = useRef(null);

  useGSAP(() => {
    const scrollerEl = scroller.current;
    const texts = Array.from(scrollerEl.children);

    // Clone texts for infinite loop
    texts.forEach((text) => {
      const clone = text.cloneNode(true);
      scrollerEl.appendChild(clone);
    });

    const totalWidth = scrollerEl.scrollWidth / 2;

    gsap.to(scrollerEl, {
      x: `-=${totalWidth}`,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });
  }, { scope: scroller }); // 👈 This ensures GSAP context cleans up properly

  return (
    <div className="container">
      <div className="scroller" ref={scroller}>
        <div className="scroll-text">Directly from Estate</div>
        <div className="scroll-text">Directly from Estate</div>
        <div className="scroll-text">Directly from Estate</div>
        <div className="scroll-text">Directly from Estate</div>
      </div>
    </div>
  );
}

