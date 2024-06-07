'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Home from '../img/svg/Navbar/Home.svg'
import Pricing from '../img/svg/Navbar/Pricing.svg'
import Wallet from '../img/svg/Navbar/Wallet.svg'
import Eth from '../img/svg/Navbar/eth.svg'
import Arrow_Down from '../img/svg/Navbar/Arrow-Down.svg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
      <nav className="Nav_Container">
        <div className="logo">
          <h1>JMCorp/Crypto</h1>
        </div>
          <div className={`menu ${isOpen ? 'open' : ''}`}>
              <div className="link"></div>
              <div className="icon">
                  <div className="home">
                      <Image src={Home as any} alt={"images for change theme"}/>
                      <p>Home</p>
                  </div>
                  <div className="pricing">
                      <Image src={Pricing as any} alt={"images for change theme"}/>
                      <p>Pricing</p>
                  </div>
                  <div className="wallet">
                      <Image src={Wallet as any} alt={"images for change theme"}/>
                      <p>Wallet</p>
                  </div>

              </div>
              <div className="eth">
                  <Image src={Eth as any} alt=""/>
                  <Image src={Arrow_Down as any} alt=""/>
              </div>
          </div>

          <div className="menuIcon" onClick={toggleMenu}>
              <div className="menuIconLine"></div>
              <div className="menuIconLine"></div>
          <div className="menuIconLine"></div>
        </div>
      </nav>
  );
}
