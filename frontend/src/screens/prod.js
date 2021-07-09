import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Container , Nav, Button, Form} from 'react-bootstrap';


import logos from '../images/logo2.png'
import label from '../images/mt10.png'
import Flabel1 from '../images/prod1.jpg'
import Flabel2 from '../images/prod2.jpg'
import Flabel3 from '../images/prod4.jpg'
import Flabel4 from '../images/pads.jpg'
import Llabel1 from '../images/pads2.jpg'
import Llabel2 from '../images/pads3.jpg'
import Llabel3 from '../images/pads4.jpg'
import Llabel4 from '../images/pads5.jpg'
import Llabel5 from '../images/sprocket1.jpg'
import Llabel6 from '../images/sprocket2.jpg'
import Llabel7 from '../images/sprocket3.jpg'
import Llabel8 from '../images/sprocket4.jpg'






const prod = () => {
  return (
    <div>
   




    
    <div className = "header">
      <div className = "container">
      <div className="home">
        <Nav className = "navbar" className ='p-2' expand ='1g' collapseOnSelect>
        <div className = "logo" ><img src = {logos} width = "125px" alt="label19"></img>

        </div>
          <Button id="btn">
            <Link className="Link" to='/HOME'>HOME</Link>
          </Button>
          <Button id="btn">
            <Link className="Link" to='/aboutus'>ABOUTUS</Link>
          </Button>
          <Button id="btn">
              <Link className ="Link" to='/'>PRODUCT</Link>

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
                <img src = {label}  alt="hakdog 55"></img>

             </div>
          
        </div> 
      </div>
     
    </div>
    <div className="color">
    <div className ="categories">
        <div className = "small-container">
          <div class="row"> </div>

        </div>
      </div>
      <div className="small-container">
        <div className="row">
            <div className="col-4">
                <img src={Flabel1} alt="label 20"></img>
                <h4 className="brand">Seat Concepts Foam & Cover Kit (Commuter) for DR650 96-19</h4>
                <div className="rating">
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star-o" ></i>
                  
                </div>
                <LinkContainer to='/product'>
                  <Button className="buttons">More</Button>
                </LinkContainer>
                
                
            </div>
            <div className="col-4">
                <img src={Flabel2} alt="label 21"></img>
                <h4 className="brand">Seat Concepts Complete Seat (Low) for DR-Z400SM 00-19</h4>
                <div className="rating">
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star-o" ></i>
                </div>
                <LinkContainer to='/product2'>
                  <Button className="buttons">More</Button>
                </LinkContainer>
         
            </div>
            <div className="col-4">
                <img src={Flabel3} alt="label 22"></img>
                <h4 className="brand">Seat Concepts Complete Seat (Low) for DR-Z400SM 00-19</h4>
                <div className="rating">
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star-half-o" ></i>
                </div>
                <LinkContainer to='/product3'>
                  <Button className="buttons">More</Button>
                </LinkContainer>
                
            </div>
            <div className="col-4">
                <img src={Flabel4} alt="label 23"></img>
                <h4 className="brand">Seat Concepts Complete Seat (Tall) for CRF250L 12-19</h4>
                <div className="rating">
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star-half-o" ></i>
                </div>
                <LinkContainer to='/product4'>
                  <Button className="buttons">More</Button>
                </LinkContainer>
                
            </div>
            <div className="row">
              <div className="col-4">
                  <img src={Llabel1} alt="label 24"></img>
                  <h4 className="brand">MRA Racing Screen Windshield for ZX10R 16-18</h4>
                  <div className="rating">
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star-half-o" ></i>
                  </div>
                  <LinkContainer to='/product5'>
                  <Button className="buttons">More</Button>
                </LinkContainer>
                  
              </div>
              <div className="col-4">
                  <img src={Llabel2} alt="label 26"></img>
                  <h4 className="brand">Puig Racing Windscreen for FJ-09 15-17</h4>
                  <div className="rating">
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star-half-o" ></i>
                  </div>
                  <LinkContainer to='/product6'>
                  <Button className="buttons">More</Button>
                </LinkContainer>
                  
              </div>
              <div className="col-4">
                  <img src={Llabel3} alt="label 27"></img>
                  <h4 className="brand">Givi D217S Windscreen for VFR800 02-11</h4>
                  <div className="rating">
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star-half-o" ></i>
                  </div>
                  <LinkContainer to='/product7'>
                  <Button className="buttons">More</Button>
                </LinkContainer>
                  
              </div>
              <div className="col-4">
                  <img src={Llabel4} alt="label 28"></img>
                  <h4 className="brand">Puig Racing Windscreen for GSX-R750 11-17</h4>
                  <div className="rating">
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star-half-o" ></i>
                  </div>
                  <LinkContainer to='/product8'>
                  <Button className="buttons">More</Button>
                </LinkContainer>
                  
              </div>
              <div className="col-4">
                  <img src={Llabel5} alt="label 29"></img>
                  <h4 className="brand">Competition Werkes GP Slip-On Exhaust for Monster 796 10-14 </h4>
                  <div className="rating">
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star-half-o" ></i>
                  </div>
                  <LinkContainer to='/product9'>
                  <Button className="buttons">More</Button>
                </LinkContainer>
                  
              </div>
              <div className="col-4">
                  <img src={Llabel6} alt="label 30"></img>
                  <h4 className="brand">Competition Werkes GP Slip-On Exhaust for Speed Triple 11-16t</h4>
                  <div className="rating">
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star-half-o" ></i>
                  </div>
                  <LinkContainer to='/product10'>
                  <Button className="buttons">More</Button>
                </LinkContainer>
                  
              </div>
              <div className="col-4">
                  <img src={Llabel7} alt="label 31"></img>
                  <h4 className="brand">Competition Werkes GP Slip-On Exhaust for Street Triple 13-16</h4>
                  <div className="rating">
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star-half-o" ></i>
                  </div>
                  <LinkContainer to='/product11'>
                  <Button className="buttons">More</Button>
                </LinkContainer>
                  
              </div>
              <div className="col-4">
                  <img src={Llabel8} alt="label 32"></img>
                  <h4 className="brand">Competition Werkes GP Slip-On Exhaust for Street Triple 08-12</h4>
                  <div className="rating">
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star" ></i>
                      <i className="fa fa-star-half-o" ></i>
                  </div>
                  <LinkContainer to='/product12'>
                  <Button className="buttons">More</Button>
                </LinkContainer>
                  
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
                   <img src={logos} alt="footer4"></img>
                    
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

export default prod;

