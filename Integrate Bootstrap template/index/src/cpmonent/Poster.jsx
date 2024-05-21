import React from 'react'
import Button from 'react-bootstrap/Button';
import "bootstrap-icons/font/bootstrap-icons.css";
function Poster() {
  return (
    <div className='App'> 
        <div className='Container'>
            <div className="row">
                <div className="col-6">
                    <div className="context">
                    <h3>Hi, I'm Krish</h3>
                    <h1>Web Developer</h1>
                    <p>I'm a professional web Developer. our main goal to help & <br/>satisficed the local & global clients by web Development
                        <br/> solutions</p>           
                    </div>
                    <div className="button">
                    <Button variant="outline-primary" size='sm' className='w-25 rounded' >Submit</Button>{' '}
                    </div>
                    <div class="social-buttons">
                        <a href="https://www.instagram.com" class="social-button social-button--instagram" aria-label="Instagram">
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/home" class="social-button social-button--linkedin" aria-label="LinkedIn">
                            <i class="bi bi-linkedin"></i>
                        </a>
                        <a href="https://github.com/signup?user_email=&source=form-home-signup" class="social-button social-button--instagram" aria-label="Instagram">
                            <i class="bi bi-github"></i>
                        </a>
                        <a href="https://x.com/?lang=en" class="social-button social-button--linkedin" aria-label="LinkedIn">
                            <i class="bi bi-twitter"></i>
                        </a>
                        <a href="https://www.facebook.com/login/device-based/regular/login?_rdc=1&_rdr" class="social-button social-button--instagram" aria-label="Instagram">
                        <i class="bi bi-facebook"></i>
                        </a>
                    </div>
                </div>
                <div className="col-6">
                <div class="vision">
                    <div class="image">
                        <img src="krish.jpg" alt="" className='img-fluid'/>
                    </div> 
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Poster
