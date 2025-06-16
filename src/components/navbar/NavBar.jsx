// import { NavLink } from 'react-router-dom';
// import './NavBar.css';

// function Navbar() {
//   return (
//     <nav className='navbar'>
//       <img src='' alt='logo' className='navbar-logo' />

//       <div className='nav-pages'>
        
//         <NavLink
//           to="/"
//           className={({ isActive }) => isActive ? 'page active' : 'page'}
//         >
//           Home
//         </NavLink>

//         <NavLink
//           to="/policy"
//           className={({ isActive }) => isActive ? 'page active' : 'page'}
//         >
//           Policy
//         </NavLink>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import './NavBar.css';
// import { GiHamburgerMenu } from 'react-icons/gi';
// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <nav className='navbar'>
//       <img src='' alt='logo' className='navbar-logo' />

      
//       <GiHamburgerMenu></GiHamburgerMenu>
//       <div className={`nav-pages ${menuOpen ? 'open' : ''}`}>
//         <NavLink
//           to="/"
//           className={({ isActive }) => isActive ? 'page active' : 'page'}
//           onClick={closeMenu}
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/policy"
//           className={({ isActive }) => isActive ? 'page active' : 'page'}
//           onClick={closeMenu}
//         >
//           Policy
//         </NavLink>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // 👈 Heroicons
import './NavBar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className='navbar'>
      <img src='' alt='logo' className='navbar-logo' />

      {/* Hamburger Icon */}
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
    </nav>
  );
}

export default Navbar;
