import './App.css';
import WhyCinnamon from './components/Importance_section/WhyCinnamon';
// import CinSoGud from './components/cinnSOGud/cinnSoGud';
import Navbar from './components/navbar/NavBar';
import Footer from './pages/Footer';
// import ProductsSection from './components/products/products';
import Home from './pages/Home';

function App() {
  return (
    <>
    {/* <ProductsSection></ProductsSection>  */}
    {/* <CinSoGud></CinSoGud> */}
 <Navbar />
      <Home />
      <WhyCinnamon/>
      <Footer/>
    </>
  );
}

export default App;
