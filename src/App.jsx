import './App.css';
import WhyCinnamon from './components/Importance_section/WhyCinnamon';
import CinSoGud from './components/cinnSOGud/cinnSoGud';
import Navbar from './components/navbar/NavBar';
import Footer from './pages/Footer';
import ProductsSection from './components/products/products';
import Home from './pages/Home';
import Scroller from './components/scroller/scroller';

function App() {
  return (
    <>
 <Navbar />
      <Home />
    <Scroller></Scroller>
    <CinSoGud></CinSoGud>
    <ProductsSection></ProductsSection> 
      <WhyCinnamon/>
      <Footer/>
    </>
  );
}

export default App;
