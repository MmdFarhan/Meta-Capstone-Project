import React from 'react';

import logo from '../images/Logo .svg';

function Nav(){
    const[menuOpen,setmenuOpen] = React.useState(false);

    function toggleMenu(){
        setmenuOpen(!menuOpen);
    }
    return(
        <nav className={`navbar ${menuOpen?"open":""}`}>
            <a href='/' className='logo'/>
            <img src={logo} alt='logo' />
            {/*Mobile nav*/}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            {/*nav items*/}
            <ul className={`nav-links ${menuOpen?"visible":""}`}>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Menu</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Services</a></li>
                <li><a href='/'>Reservations</a></li>
                <li><a href='/'>Online Order</a></li>
                <li><a href='/'>Login</a></li>
            </ul>
        </nav>
    )
}
export default Nav;
