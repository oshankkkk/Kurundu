import "./scroller.css"
import { useEffect, useRef } from "react"
export default function Scroller(){
let scroller=useRef(null)
function scrolling(){
let scrollMsg=Array.from(scroller.current.children)
console.log(scrollMsg)
scrollMsg.forEach((msg)=>{
    let dupMsg=msg.cloneNode(true)
    scroller.current.appendChild(dupMsg)
})

}
useEffect(()=>{scrolling()},[])
    return(
        <div className="container ">
            <div className="scroller" ref={scroller} >
                <div className="scroll-text">Directly from Estate</div>
                {/* <div className="scroll-text">Directly from Estate</div>
                <div className="scroll-text">Directly from Estate</div>
                <div className="scroll-text">Directly from Estate</div> */}
            </div>
{/* <div className="scroller" ref={scroller} >
                <div className="scroll-text">Directly from Estate</div>

            </div>
<div className="scroller" ref={scroller} >
                <div className="scroll-text">Directly from Estate</div>

            </div> */}

        </div>
    )
}