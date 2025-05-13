import React from 'react';

import logo from '../images/Logo .svg';

function Footer() {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt="" />
                <p>We Are a Customer-Friendly Restaurant focused on Recipes With Modern Twist</p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Menu</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Services</a></li>
                <li><a href='/'>Reservations</a></li>
                <li><a href='/'>Online Order</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address:<br></br>Abc Street Chennai</li>
                    <li>Phone:<br></br>+9840554561</li>
                    <li>Email:<br></br>Littlelemon@gmail.com</li>
                </ul>
            </div>
            <div>
                <h3>Social Media</h3>
                <ul>
                <li><a href='/'>Facebook</a></li>
                <li><a href='/'>Instagram</a></li>
                <li><a href='/'>Youtube</a></li> 
                </ul>
            </div>
        </section>
    </footer>
  )
}

export default Footer;
