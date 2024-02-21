import React from 'react'
import ReactDOM from 'react-dom/client'
import 'tailwindcss/tailwind.css';
import './Navbar.css';


const Navbar = () => {
  return (
    <>
   <header>
    <div className="container">
        <img src="\src\assets\images\pure_treats_logo.png" alt="puretreats_logo" className="puretreats_logo" />
    </div>
    <div className="logo"></div>
    <nav>
        <ul>
            <li><a href="download.html"><strong>QUIENES SOMOS</strong></a></li>
            <li><a href="download.html"><strong>NUESTRA FILOSOFIA</strong></a></li>
            <li><a href="download.html"><strong>CONTACTO</strong></a></li>
            <li><a href="download.html"><strong>PARTNERS</strong></a></li>
        </ul>
        <button onClick={() => window.location.href='https://factoriaf5.org/'} className="button_1"> <strong>Empezar</strong></button>
    </nav>
</header>
    </>
  )
}

export default Navbar