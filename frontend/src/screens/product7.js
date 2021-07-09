import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Container , Nav, Button, Form} from 'react-bootstrap';


import logos from '../images/logo2.png'
import Flabel1 from '../images/seat4.jpg'
import Flabel2 from '../images/seat1.jpg'
import Flabel3 from '../images/seat2.jpg'
import Flabel4 from '../images/seat3.jpg'
import Flabel10 from '../images/pads4.jpg'







const product = () => {
  return (
<div>
    <div className = "header">
      <div className = "container">
      <div className="home">
        <Nav className = "navbar" className ='p-2' expand ='1g' collapseOnSelect>
        <div className = "logo" ><img src = {logos} width = "125px" alt="label 68"></img>

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

       
          
        
      </div>
        
      <div className ="content clearfix">
                <div className = " main-content">
                    <div className="Post">
                        <img src= {Flabel10} className ="post-image" alt="label 68"></img>
                        <div className="post-preview">
                            <h1 className ="color-blog">PSR Frame Sliders Cut for GSX-S1000F 16-17</h1>
                            <br></br>
                            <p className= "preview-text">TMade in the USA

- Designed specifically for the 2016-2020 Suzuki GSX-S1000

- No fairing cutting to install

- 6061T6 aluminum inserts pressed into sliders for added strength and slider integrity

- Guaranteed for quality, fitment and finish or your money back</p>
                        </div>
                </div>  
        </div> 

     
    </div>
    <br></br>
    <h2 class="title">Latest Products</h2>
    <div className="small-container">
        <div class="row">
            <div class="col-4">
                <img src={Flabel1} alt="label 69"></img>
                <h4>VICTORY – 1731CC</h4>
                <div class="rating">
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star-o" ></i>
                </div>

            </div>
            <div class="col-4">
                <img src={Flabel2} alt="label 70"></img>
                <h4>SEAT CONCEPTS COMPLETE SEAT (LOW) FOR DR-Z400SM 00-19
</h4>
                <div class="rating">
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star-o" ></i>
                </div>

            </div>
            <div class="col-4">
                <img src={Flabel3} alt="label 71"></img>
                <h4>SEAT CONCEPTS COMPLETE SEAT (LOW) FOR DR-Z400SM 00-19
</h4>
                <div class="rating">
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star-o" ></i>
                </div>

            </div>
            
            <div class="col-4">
                <img src={Flabel4} alt="label 72"></img>
                <h4>SEAT CONCEPTS COMPLETE SEAT (TALL) FOR CRF250L 12-19
</h4>
                <div class="rating">
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star-o" ></i>
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
                   <img src={logos} alt="footer12"></img>
                    
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
</div>
    
   

    







   




    










    
   


);
};

export default product;
