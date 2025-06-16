import { useState,useEffect,useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // 👈 Heroicons
import { CiShoppingBasket } from 'react-icons/ci';
import './NavBar.css';
import { cartContext } from '../../App';
import { useContext } from 'react';

function Navbar() {
  let {cartState,setCartState}=useContext(cartContext)
  let [cartCount,setCartCount]=useState(0)

const calCartNum=useCallback(()=> {
    console.log(cartState)
    let tot = 0;
    cartState.forEach((element) => {
      if (element.amount != undefined) {
        tot += element.amount;
      } else {
        tot++;
      }
    });
    setCartCount(tot);
    localStorage.setItem("cart", JSON.stringify(cartState));
  },[cartState])
  useEffect(
calCartNum
  ,[cartState])
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className='navbar'>
      <img src='' alt='logo' className='navbar-logo' />

      <div className='hamburger-icon' onClick={toggleMenu}>
        {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </div>

      <div className={`nav-pages ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'page active' : 'page'} onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/policy" className={({ isActive }) => isActive ? 'page active' : 'page'} onClick={() => setMenuOpen(false)}>
          Policy
        </NavLink>
      </div>

     {/* <div className='cart-icon'>
      <CiShoppingBasket></CiShoppingBasket>

      {cartCount}
      </div>  */}
    </nav>
  );
}

export default Navbar;
