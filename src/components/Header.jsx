import React from 'react';

import BannerImg from '../images/restauranfood.jpg';

function Header(){
    return(
        <header className="header">
            <section>
                <div>
                    <h2>Green Tree</h2>
                    <h3>Chennai</h3>
                    <p>Our menu is a reflection of our passion for creating dishes that are both delicious and satisfying.<br></br>Reserve Your Table Right Now!!.</p>
                    <link to="/booking"><button aria-label='On Click'>Reserve Table</button></link>
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