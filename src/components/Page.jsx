import React from 'react';
import logo from './images/logo.png'
import mainImage from './images/rose.jpg'

const Page = () => {
  return (
    <div>
      <header className='header'>
        <div>
            <img src={logo} className='logo-style' alt='logo'></img>
        </div>
        <nav>
            <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Contact us</a></li>
            <li><a href='#'>Service</a></li>
            <li><a href='#'>career</a></li>
            <li><a href='#'>signup</a></li>
            </ul>
        </nav>
      </header>
      <main>
        <div className='left-side'>
            <h1>digital </h1>
            <h2>Marketing</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, unde, expedita mollitia alias rem cum saepe temporibus vero porro incidunt nihil. Inventore ex odio quas.
            </p>
            

        </div>
        <div className='right-side'>
            <img src={mainImage} className='rose-style'></img>
        </div>
      </main>
    </div>
  );
}

export default Page;
