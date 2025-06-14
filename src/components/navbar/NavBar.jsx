import React from 'react';
import './NavBar.css';

function Navbar() {
    return (
        <nav className='navbar'>
           <img src='' alt= 'logo' className='navbar-logo'></img>
            <ul className='navbar-links'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#product'>Products</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a href='#policy'>Policy</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;