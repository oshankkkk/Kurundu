import cinnamonImg from '../../assets/hero_image.png';
import "./heroSection.css"
export default function HeroSection(){
return(

    <section className="hero-section" >
      <div className="hero-text">
        <h1>ANCIENT FLAVOUR,<br/>MODERN LIVING</h1>
        <p>Experience the warmth and richness of pure Ceylon cinnamon.</p>
        <div className='action-but'>
        <button className="explore-btn">Explore Now!</button>
        <button className="explore-btn">Contact Us</button>

        </div>
      </div>
      <div className="hero-image">
        <img src={cinnamonImg} alt="Ceylon Cinnamon Pack" />
      </div>

    </section>
)
}