import React from 'react'
import '@/src/scss/App.scss'
import Right_Arrow from '../src/img/svg/Home/Right_Arrow.svg'
import Eth from '../src/img/svg/Home/Cards/Eth.svg'
import Run from '../src/img/svg/Home/Cards/Run.svg'
import Relay from '../src/img/svg/Home/Cards/Relay.svg'
import Dashboard from '../src/img/png/Dashboard.png'
import Navbar from '@/src/Components/Navbar'
import Image from "next/image";

export default function page() {
  return (
    <>
      <Navbar/>
      <div className="HomeContainer">

          <div className="Home">
              <div className="title">
                  <h1>Gérez efficacement votre wallet avec <span>Ethereum</span> et <span>EtherGate</span></h1>
                  <button className="Button">Commencer
                      <Image src={Right_Arrow as any} alt="alt"/>
                  </button>
              </div>

              <div className="header_img">
                  <Image src={Dashboard as any} alt='' layout="responsive"/>
              </div>

              <div className="card">
                  <div className="title">
                      <h1>Gérer comme vous le voulez votre compte de A à Z <span>efficacement</span> et <span>rapidement</span></h1>
                  </div>
                  <div className="cards">
                      <div className="firstCards">
                          <div className="titleCard">
                              <Image src={Eth as any} alt=""/>
                              <h2>Multi Chain</h2>
                          </div>
                          <p>Grâce à la puissance d'ethreum, allié à la puissance du typescript, vous avez la
                              possibilité de changer de blockchain comme bon vous semble</p>
                      </div>
                      <div className="firstCards">
                          <div className="titleCard">
                              <Image src={Run as any} alt=""/>
                              <h2>Optimisé</h2>
                          </div>
                          <p>Le dashboard a été conçu pour que tout soit plus rapide, et a porté de main, tout a été réfléchi pour vous, ne perdez plus de secondes précieuse</p>
                      </div>
                      <div className="firstCards">
                          <div className="titleCard">
                              <Image src={Relay as any} alt=""/>
                              <h2>En temps réel</h2>
                          </div>
                          <p>Voyez toutes vos dépense, retrait, virement, graphique, prix,... en temps réel</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        {/*<Footer/>*/}
    </>
  )
}
