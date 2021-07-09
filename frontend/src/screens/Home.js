import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Container , Nav, Button, Form} from 'react-bootstrap';

import logos from '../images/logo2.png'
import label from '../images/mt10.png'
import label1 from '../images/SeekPng.com_super-bike-png_7896307.png'
import label2 from '../images/SeekPng.com_super-bike-png_9138966.png'
import label3 from '../images/SeekPng.com_png-image_225094.png'
import Flabel1 from '../images/seat4.jpg'
import Flabel2 from '../images/seat1.jpg'
import Flabel3 from '../images/seat2.jpg'
import Flabel4 from '../images/seat3.jpg'
import Llabel1 from '../images/screen1.jpg'
import Llabel2 from '../images/screen2.jpg'
import Llabel3 from '../images/screen3.jpg'
import Llabel4 from '../images/screen4.jpg'
import Llabel5 from '../images/exhaust.jpg'
import Llabel6 from '../images/exhaust1.jpg'
import Llabel7 from '../images/exhasut3.jpg'
import Llabel8 from '../images/exhaust2.jpg'

const Home = () => {
  return (
    <div>
       <div className = "header">
      <div className = "container">
      <div className="home">
        <Nav className = "navbar" className ='p-2' expand ='1g' collapseOnSelect>
        <div className = "logo" ><img src = {logos} width = "125px" alt="hakdog"></img>

        </div>
          <Button id="btn">
            <Link className="Link" to='/'>HOME</Link>
          </Button>
          <Button id="btn">
            <Link className="Link" to='/aboutus'>ABOUTUS</Link>
          </Button>
          <Button id="btn">
              <Link className ="Link" to='/prod'>PRODUCT</Link>

          </Button>
          
          <Button id="btn">
            <Link className="Link" to='/blog'>BLOG</Link>
          </Button>
        </Nav>
      </div>

       
          
        <div className = "row">
          <div className = "col-2">
              <h1 id="text">Parts, Service, Value. Everyday.!</h1>
              <br></br>
                <p className="sub"> Get right to the good parts Your auto parts partner!</p>
                <p className="sub">Power Auto Parts for perfect performance!</p>
                <p className="sub">Countless parts.Happy hearts.</p>
              

          </div>
          
              <div className = "col-2">
                <img src = {label} alt="label"></img>

             </div>
          
        </div> 
      </div>
     
    </div>
    <div className="color">
    <div className ="categories">
        <div className = "small-container">
          <div class="row">
                <div className="col-3">
                    <img src={label1} alt="label1"></img>
                </div>
                <div className="col-3">
                    <img src={label2} alt="label2"></img>
                </div>
                <div className="col-3">
                    <img src={label3} alt="3"></img>
                </div>
            </div>
          
          
          
        </div>
      </div>
      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
            <div className="col-4">
                <img src={Flabel1} alt="label4"></img>
                <h4 className="brand">Seat Concepts Foam & Cover Kit (Commuter) for DR650 96-19</h4>
                <div className="rating">
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star-o" ></i>
                </div>
                
            </div>
            <div className="col-4">
                <img src={Flabel2} alt="5"></img>
                <h4 className="brand">Seat Concepts Complete Seat (Low) for DR-Z400SM 00-19</h4>
                <div className="rating">
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star-o" ></i>
                </div>
         
            </div>
            <div className="col-4">
                <img src={Flabel3} alt="label6"></img>
                <h4 className="brand">Seat Concepts Complete Seat (Low) for DR-Z400SM 00-19</h4>
                <div className="rating">
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star-half-o" ></i>
                </div>
                
            </div>
            <div className="col-4">
                <img src={Flabel4} alt="label7"></img>
                <h4 className="brand">Seat Concepts Complete Seat (Tall) for CRF250L 12-19</h4>
                <div className="rating">
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star-half-o" ></i>
                </div>
                
            </div>
            <h2 className="title">Latest Products</h2>
            <div className="row">
              <div className="col-4">
                  <img src={Llabel1} alt="label8"></img>
                  <h4 className="brand">MRA Racing Screen Windshield for ZX10R 16-18</h4>
                  <div className="rating">
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star-half-o" ></i>
                  </div>
                  
              </div>
              <div className="col-4">
                  <img src={Llabel2} alt="label9"></img>
                  <h4 className="brand">Puig Racing Windscreen for FJ-09 15-17</h4>
                  <div className="rating">
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star-half-o" ></i>
                  </div>
                  
              </div>
              <div className="col-4">
                  <img src={Llabel3} alt="label10"></img>
                  <h4 className="brand">Givi D217S Windscreen for VFR800 02-11</h4>
                  <div className="rating">
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star-half-o" ></i>
                  </div>
                  
              </div>
              <div className="col-4">
                  <img src={Llabel4} alt="label11"></img>
                  <h4 className="brand">Puig Racing Windscreen for GSX-R750 11-17</h4>
                  <div className="rating">
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star-half-o" ></i>
                  </div>
                  
              </div>
              <div className="col-4">
                  <img src={Llabel5} alt="label12"></img>
                  <h4 className="brand">Competition Werkes GP Slip-On Exhaust for Monster 796 10-14 </h4>
                  <div className="rating">
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star-half-o" ></i>
                  </div>
                  
              </div>
              <div className="col-4">
                  <img src={Llabel6} alt="label13"></img>
                  <h4 className="brand">Competition Werkes GP Slip-On Exhaust for Speed Triple 11-16t</h4>
                  <div className="rating">
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star-half-o" ></i>
                  </div>
                  
              </div>
              <div className="col-4">
                  <img src={Llabel7} alt="label14"></img>
                  <h4 className="brand">Competition Werkes GP Slip-On Exhaust for Street Triple 13-16</h4>
                  <div className="rating">
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star-half-o" ></i>
                  </div>
                  
              </div>
              <div className="col-4">
                  <img src={Llabel8} alt="label15"></img>
                  <h4 className="brand">Competition Werkes GP Slip-On Exhaust for Street Triple 08-12</h4>
                  <div className="rating">
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star-half-o" ></i>
                  </div>
                  
              </div>
              
           
           
           
           
           
           
            </div>
        </div>




        </div>
    </div>
   
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col-1">
                    <h3>Download Our App</h3>
                    <p>Download App for Android and ios mobile phone</p>
                </div>
                <div className="footer-col-2">
                   <img src={logos} alt="footer1"></img>
                    
                </div>
                <div className="footer-col-3">
                    <h3>Useful Links</h3>
                  <ul>
                      <li>Blog Post</li>
                      <li>Return Policy</li>
                      
                  </ul>
                </div>
                <div className="footer-col-4">
                    <h3>Follow Us</h3>
                  <ul>
                      <li>Facebook</li>
                      <li>Twitter</li>
                      <li>Instagram</li>
                      <li>Youtube</li>
                      
                  </ul>
                </div>
            </div>
            
            <p className="copyright">Motorcycle Accessories</p>
        </div>
    </div>
    </div>
  );
};

export default Home;
