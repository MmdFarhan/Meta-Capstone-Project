import React from 'react';

import { Link } from 'react-router-dom';

import BannerImg from '../images/restauranfood.jpg';

function Header(){
    return(
        <header className="header">
            <section>
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chennai</h3>
                    <p>Our menu is a reflection of our passion for creating dishes that are both delicious and satisfying.<br></br>Reserve Your Table Right Now!!.</p>
                    <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
                </div>
                {/*Banner Image*/}
                <div className='banner-img'>
                    <img src={BannerImg} alt=''/> 
                </div>
            </section>
        </header>
        

    )
}
export default Header;