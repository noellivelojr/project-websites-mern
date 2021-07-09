
import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Container , Nav, Button, Form} from 'react-bootstrap';


import logos from '../images/logo2.png'

const aboutus = () => {
    return (
      <div>
        <div className="home">
          <Nav className = "navbar" className ='mb-5 p-2' expand ='1g' collapseOnSelect>
          <div className = "logo" ><img src = {logos} width = "125px" alt="label 40"></img> 
          </div> 
            <Button id="btn">
              <Link className="Link" to='/Home'>HOME</Link>
            </Button>
            <Button id="btn">
              <Link className="Link" to='/'>ABOUTUS</Link>
            </Button>
            <Button id="btn">
              <Link className="Link" to='/prod'>PRODUCT</Link>
            </Button>
            
            <Button id="btn">
              <Link className="Link" to='/blog'>BLOG</Link>
            </Button>
          </Nav>
  
      </div>
      
      <div className = "header">
         <div className = "container">
          <div className = "navbar">
          
          </div>
  
       </div>
      </div>
      <div className="about">
          <div className="about-title"> ABOUT</div>
          <p className="about-content">
              If you are looking for motorcycle helmets, motorcycle clothing, motorcycle accessories and motorcycle parts at the best price, welcome to Motardinn; your motorcycle shop online. Motardinn has seen rapid growth by focusing on a few fundamental principles: Deliver outstanding customer service; stock most of the products we sell; provide competitive pricing; and most importantly, hire and retain staff that is as dedicated to riding as the customers we serve. We´re a team of motorcycle riders committed to providing you, our valued customer, quality products, exceptional service and the best shopping experience. 
              &nbsp;
              In all of Anchorage, AK, there isn't a friendlier or more knowledgeable staff than ours. We're happy to help you find either the perfect recreational vehicle or the parts you've been looking for. If you need help in making your selection, call or stop in-we're always ready to help!
              We know individuality is important, which is why we pay close attention to the interests of each customer. From the minute you walk through the door, meeting your needs is our top priority. Founded not only on excellent customer service, but also on the principles of hard work and a focused attitude, The Motorcycle Shop has a long list of satisfied customers.
          </p>
  
  
      </div>
      
  
  
  
  
  
  
  
  
  
  
      <div className="footer">
          <div className="container">
              <div className="row">
                  <div className="footer-col-1">
                      <h3>Download Our App</h3>
                      <p>Download App for Android and ios mobile phone</p>
                  </div>
                  <div className="footer-col-2">
                     <img src={logos} alt="label16"></img>
                      
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
  
  export default aboutus;
  