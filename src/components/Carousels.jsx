import React from 'react'
import '../App.css'
import Carousel from 'react-bootstrap/Carousel';

import AirJordan from '../assets/air-jordan.png'
import ferrari from '../assets/ferrari.png'
import mitshubishi from '../assets/mitshubishi.png'
import acura from '../assets/acura.png'
import mclaren from '../assets/mclaren.png'
import adidas from '../assets/adidas.png'
import untitled from '../assets/untitled.png'
import untitled1 from '../assets/untitled1.png'
import untitled2 from '../assets/untitled2.png'
import { useNavigate } from 'react-router-dom';


const Carousels = () => {
  const navigate = useNavigate();
  return (
    <Carousel style={{ height: '85vh'}}>
      <Carousel.Item interval={5000}>
        <section className="dashboard1">
          <div className="left">
            <h2>SHOP WITH UTMOST</h2>
            <h1> CONFIDENCE </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est eligendi quia minus illum itaque nesciunt corrupti magni accusamus excepturi!</p>
            <button onClick={()=>navigate('/productsPage')}>Browse Products</button>
            <h3>Products availaable from:</h3>
            <ul>
              <li><img src={AirJordan} alt="" /></li>
              <li><img src={ferrari} alt="" /></li>
              <li><img src={mitshubishi} alt="" /></li>
              <li><img src={acura} alt="" /></li>
              <li><img src={mclaren} alt="" /></li>
              <li><img src={adidas} alt="" /></li>
            </ul>
          </div>

          <div className="right">
            <img id="design1" src={untitled} alt="" />
          </div>

        </section>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <section className="dashboard1">
          <div className="left">
            <h2>SHOP WITH UTMOST</h2>
            <h1> CONFIDENCE </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est eligendi quia minus illum itaque nesciunt corrupti magni accusamus excepturi!</p>
            <button onClick={()=>navigate('/productsPage')}>Browse Products</button>
            <h3>Products availaable from:</h3>
            <ul>
              <li><img src={AirJordan} alt="" /></li>
              <li><img src={ferrari} alt="" /></li>
              <li><img src={mitshubishi} alt="" /></li>
              <li><img src={acura} alt="" /></li>
              <li><img src={mclaren} alt="" /></li>
              <li><img src={adidas} alt="" /></li>
            </ul>
          </div>

          <div className="right">
            <img id="design1" src={untitled1} alt="" />
          </div>

        </section>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <section className="dashboard1">
          <div className="left">
            <h2>SHOP WITH UTMOST</h2>
            <h1> CONFIDENCE </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est eligendi quia minus illum itaque nesciunt corrupti magni accusamus excepturi!</p>
            <button onClick={()=>navigate('/productsPage')}>Browse Products</button>
            <h3>Products availaable from:</h3>
            <ul>
              <li><img src={AirJordan} alt="" /></li>
              <li><img src={ferrari} alt="" /></li>
              <li><img src={mitshubishi} alt="" /></li>
              <li><img src={acura} alt="" /></li>
              <li><img src={mclaren} alt="" /></li>
              <li><img src={adidas} alt="" /></li>
            </ul>
          </div>

          <div className="right">
            <img id="design1" src={untitled2} alt="" />
          </div>

        </section>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousels