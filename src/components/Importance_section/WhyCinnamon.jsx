import "./WhyCinnamon.css";
import ceylon from  "../../assets/ceylon.png"
import hand from  "../../assets/hand.png"
import ethically from  "../../assets/ethically.png"

function WhyCinnamon(){
    return (
    <div className="why-cinnamon-wrapper">
      <h2 className="section-title">WORLDS BEST CINNAMON</h2>
      <p className="section-subtitle">
        Ceylon cinnamon, from the inner bark of the Cinnamomum verum tree — gently hand-rolled and naturally dried, just like it's been done for generations.
      </p>

      <div className="why-cinnamon-features">
        <div className="feature">
          <img src={ceylon} alt="100% Pure Ceylon Cinnamon" />
          <p>100% Pure Ceylon<br />Cinnamon</p>
        </div>
        <div className="feature">
          <img src={hand} alt="Hand-Harvested with Care" />

          <p>Hand-Harvested<br />with Care</p>
        </div>
        <div className="feature">
          <img src={ethically} alt="Ethically Sourced" />
          <p>Ethically Sourced.<br />Sustainably Made.</p>
        </div>
      </div>
    </div>
    )
}

export default WhyCinnamon;