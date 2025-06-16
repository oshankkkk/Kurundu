import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Policy from './pages/Policy';

function App() {
  return (
    <Router basename='/Kurundu' >
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
