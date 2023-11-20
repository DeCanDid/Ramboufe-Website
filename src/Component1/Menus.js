import React from 'react';
import './Dynam.css'

const Menus = () => {
  return (
    <>
<div className="main_body">
    <h2>Our Menus</h2>
    <p>Click below to see the menu</p>
<div className="our_menu">
    <details className='menu_holder'>
        <summary><h3>Main Menu</h3></summary>

            <div>
                <img loading='lazy' src={require ('../Images/menu1.JPG')} alt="" />
            </div>
    </details>

    <details className='menu_holder'>
        <summary><h3>Grill Menu</h3></summary>

        <div>
            <img src={require ('../Images/grill-menu.JPG')} alt="" />
        </div>
    </details>
</div>
</div>

        {/* <div className="our_menu">
            <h1>Our Menus</h1>

            <div className='menu_holder'>
            <h3>Main Menu</h3>
            <div>
                <img loading='lazy' src={require ('../Images/menu1.JPG')} alt="" />
            </div>
            </div>

            <div className='menu_holder'>
            <h3>Grill Menu</h3>
            <div>
                <img src={require ('../Images/grill-menu.JPG')} alt="" />
            </div>
            </div>
        </div> */}
    </>
  )
}

export default Menus;