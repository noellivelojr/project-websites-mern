import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Container , Nav, Button, Form} from 'react-bootstrap';

import logos from '../images/logo2.png'
import blog1 from '../images/bigbike2.jpg'
import blog2 from '../images/bigbike3.jpg'
import blog3 from '../images/bigbike4.jpg'






const blog = () => {
  return (
    <div>
        <div className = "header">
            <div className="container">
               <div className="blog">
               <Nav className = "navbar" className ='p-2' expand ='1g' collapseOnSelect>
               <div className = "logo" ><img src = {logos} width = "125px"  alt="hakdog 22"></img>
                </div>
                <Button id="btn">
                <Link className="Link" to='/Home'>HOME</Link>
                </Button>
                <Button id="btn">
                    <Link className="Link" to='/aboutus'>ABOUTUS</Link>
                </Button>
                <Button id="btn">
                    <Link className="Link" to='/prod'>PRODUCTS</Link>
                </Button>
               
                <Button id="btn">
                    <Link className="Link" to='/'>BLOG</Link>
                </Button>

               </Nav>

                   

               </div>

            </div>
            <div className ="content clearfix">
                <div className = " main-content">
                    <div className="Post">
                        <img src= {blog1} className ="post-image" alt="label16"></img>
                        <div className="post-preview">
                            <h1 className ="color-blog">Victory – 1731cc</h1>
                            <br></br>
                            <p className= "preview-text">Doesn’t matter which model you choose, the Victory ‘Freedom’ V-twin, at 1731cc, is enough to get in on the top-10 action. We’d be surprised if the firm doesn’t make changes and move its motor higher in the rankings in the near future though.</p>
                        </div>
                    </div>

                    <div className="Post">
                        <img src= {blog2} className ="post-image" alt="label17"></img>
                        <div className="post-preview">
                            <h1 className ="color-blog">Suzuki M1800/C1800 – 1783cc</h1>
                            <br></br>
                            <p className= "preview-text"> Only three in and already we’re talking about bikes that list themselves as “1800”. Strictly speaking, the M1800/C1800 motor is just 1783cc, but even at that size it still passes an important landmark – in the UK, the average car engine is 1740cc, making the Suzuki the first bike on the list to be bigger than most cars on our roads..</p>
                        </div>
                    </div>

                    <div className="Post">
                        <img src= {blog3} className ="post-image" alt="label18e"></img>
                        <div className="post-preview">
                            <h1 className ="color-blog">Indian Chief – 1811cc</h1>
                            <br></br>
                            <p className= "preview-text"> The new Indian provides a perfect example of one-upmanship, having been launched a few months ago with the firm’s Thunder Stroke 111 motor..</p>
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
                   <img src={logos} alt="footer3"></img>
                    
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

export default blog;

