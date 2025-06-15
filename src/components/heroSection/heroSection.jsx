import cinnamonImg from '../../assets/hero_image.png';
import "./heroSection.css"
export default function HeroSection(){
  const handleExploreClick=()=> {
    const productsSection = document.getElementById('product');
    if(productsSection){
      productsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
return(

    <section className="hero-section" id='home'>
      <div className="hero-text">
        <h1>ANCIENT FLAVOUR,<br/>MODERN LIVING</h1>
        <p>Experience the warmth and richness of pure Ceylon cinnamon.</p>
        <div className='action-but'>
        <button className="explore-btn" onClick={handleExploreClick}>Explore Now!</button>
        <button className="explore-btn">Contact Us</button>

        </div>
      </div>
      <div className="hero-image">
        <img src={cinnamonImg} alt="Ceylon Cinnamon Pack" />
      </div>

    </section>
)
}