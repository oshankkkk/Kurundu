import './App.css';
import Navbar from './components/navbar/NavBar';
import Home from './pages/Home';
// import UniqueSection from './pages/UniqueSection';
// import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />

      <div style={{ height: '50px', backgroundColor: '#fff' }}>
        <p style={{ textAlign: 'center', color: 'brown', padding: '10px' }}>Made in Sri Lanka</p>
      </div>

      <div style={{ height: '400px', backgroundColor: '#8B6E4A', padding : '30px'}}>

        <p style={{ textAlign: 'center', paddingTop: '180px', color: '#fff'}}>Why Eat Cinnamon Section Placeholder</p>
      </div>

      {/* 🟨 Placeholder for "Products" section */}
      <div style={{ height: '500px', backgroundColor: '#fce5c0' }}>
        {/* He will design this */}
        <p style={{ textAlign: 'center', paddingTop: '220px', color: '#000' }}>Products Section Placeholder</p>
      </div>

      {/* 🟩 Now your part starts here */}
      {/* <UniqueSection />
      <Footer /> */}
    </>
  );
}

export default App;
