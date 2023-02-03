import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { useState } from 'react';
function Navbar() {
    const [isClicked, setIsClicked] = useState(false);
    function NavSwitch() {
        setIsClicked(!isClicked);
    }
    return (
        <div className='NavContainer'>
            <nav className='NavBox'>
                <div className='LogoDiv'>
                    <div className='ImgDiv'></div>
                    <div className='Name'>Crypto<span style={{ color: 'gold' }}>Mania</span></div>
                </div>
                <ul className={isClicked ? 'NavUL active' : 'NavUL'}>
                    <li><Link to='/' className="elem">Home</Link></li>
                    <li><Link to='/exchanges' className="elem">Exchange</Link></li>
                    <li><Link to='/cryptocurrencies' className="elem">Currencies</Link></li>
                    <li><Link to='/crypto/:coinId' className="elem">CryptoDetails</Link></li>
                    <li><Link to='/news' className="elem">News</Link></li>
                </ul>
                <div id='mobile'>
                    <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'} onClick={NavSwitch}></i>
                </div>
            </nav>
        </div>
    )
}

export default Navbar