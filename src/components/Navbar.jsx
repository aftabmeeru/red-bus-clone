import React from 'react';

const Navbar = () => {

  return (
    <nav>
        <div className='logo'>
          <h1>RedBus</h1>
        </div>
        <div className='list'>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;