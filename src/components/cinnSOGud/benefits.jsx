// import "./benefits.css"
// export default function Benefits({benefit}){

//    return(
//         <>
//     <div className="support-card">
//         <h2 className="card-title"> {benefit.title} </h2>

//         <p className="card-description">
//         {benefit.description}
//         </p>
//     </div>
//         </>
//     )
// }

import "./benefits.css"
import { forwardRef } from "react"

const Benefits = forwardRef(({ benefit }) => {
  return (
    <div className="support-card" >
      <h2 className="card-title">{benefit.title}</h2>
      <p className="card-description">
        {benefit.description}
      </p>
    </div>
  )
});

export default Benefits;