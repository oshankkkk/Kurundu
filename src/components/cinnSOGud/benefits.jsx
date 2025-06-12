import "./benefits.css"

function Benefits({ benefit })  {
  return (
    <div className="support-card" >
      <h2 className="card-title">{benefit.title}</h2>
      <p className="card-description">
        {benefit.description}
      </p>
    </div>
  )
};

export default Benefits;