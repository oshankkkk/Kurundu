import '../styles/Home.css';
import Scroller from '../components/scroller/scroller';
import HeroSection from '../components/heroSection/heroSection';
import ProductsSection from '../components/products/products';
import WhyCinnamon from '../components/Importance_section/WhyCinnamon';
import CinSoGud from '../components/cinnSOGud/cinnSoGud';
function Home() {
  return (
    <>
    <div className='hero-section-wrapper'>

<HeroSection></HeroSection>
  <Scroller></Scroller>
    </div>
    <CinSoGud></CinSoGud>
    <ProductsSection></ProductsSection> 
      <WhyCinnamon/>
    </>
  );
};

export default Home;
