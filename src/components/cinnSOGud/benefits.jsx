import "./benefits.css"

function Benefits({ benefit ,children})  {
  return (
    <div className="support-card" >
      <div className="card-icon">
        {children}
      </div>
      <h2 className="card-title">{benefit.title}</h2>
      <p className="card-description">
        {benefit.description}
      </p>
    </div>
  )
};

export default Benefits;