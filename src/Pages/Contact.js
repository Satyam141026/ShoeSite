import React from 'react'
import { NavLink } from 'react-router-dom'
export const Contact = () => {
  return (
    <div>
 
  {/* header section start */}
  <div className="header_section header_main">
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <div className="logo"><a href="#"><img src="images/logo.png" /></a></div>
        </div>
        <div className="col-sm-9">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <NavLink className="nav-item nav-link" to="/home">Home</NavLink>
                <NavLink className="nav-item nav-link" to="/collection">Collection</NavLink>
                <NavLink className="nav-item nav-link" to="/shoe">Shoes</NavLink>
                <NavLink className="nav-item nav-link" to="/racing">Racing Boots</NavLink>
                <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>
                <a className="nav-item nav-link last" href="#"><img src="images/search_icon.png" /></a>
                <a className="nav-item nav-link last" href="contact.html"><img src="images/shop_icon.png" /></a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* contact section start */}
  <div className="collection_text">Contact Us</div>
  <div className="layout_padding contact_section">
    <div className="container">
      <h1 className="new_text"><strong>Contact Now</strong></h1>
    </div>
    <div className="container-fluid ram">
      <div className="row">
        <div className="col-md-6">
          <div className="email_box">
            <div className="input_main">
              <div className="container">
                <form action="/action_page.php">
                  <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Name" name="Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Phone Numbar" name="Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Email" name="Email" />
                  </div>
                  <div className="form-group">
                    <textarea className="massage-bt" placeholder="Massage" rows={5} id="comment" name="Massage" defaultValue={""} />
                  </div>
                </form>   
              </div> 
              <div className="send_btn">
                <button className="main_bt">Send</button>
              </div>                   
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="shop_banner">
            <div className="our_shop">
              <button className="out_shop_bt">Our Shop</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* contact section end */}
  {/* section footer start */}
  <div className="section_footer">
    <div className="container">
      <div className="mail_section">
        <div className="row">
          <div className="col-sm-6 col-lg-2">
            <div><a href="#"><img src="images/footer-logo.png" /></a></div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <div className="footer-logo"><img src="images/phone-icon.png" /><span className="map_text">(71) 1234567890</span></div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="footer-logo"><img src="images/email-icon.png" /><span className="map_text">Demo@gmail.com</span></div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="social_icon">
              <ul>
                <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                <li><a href="#"><img src="images/in-icon.png" /></a></li>
                <li><a href="#"><img src="images/google-icon.png" /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-2" />
        </div>
      </div> 
      <div className="footer_section_2">
        <div className="row">
          <div className="col-sm-4 col-lg-2">
            <p className="dummy_text"> ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur  ipsum dolor sit amet,</p>
          </div>
          <div className="col-sm-4 col-lg-2">
            <h2 className="shop_text">Address </h2>
            <div className="image-icon"><img src="images/map-icon.png" /><span className="pet_text">No 40 Baria Sreet 15/2 NewYork City, NY, United States.</span></div>
          </div>
          <div className="col-sm-4 col-md-6 col-lg-3">
            <h2 className="shop_text">Our Company </h2>
            <div className="delivery_text">
              <ul>
                <li>Delivery</li>
                <li>Legal Notice</li>
                <li>About us</li>
                <li>Secure payment</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h2 className="adderess_text">Products</h2>
            <div className="delivery_text">
              <ul>
                <li>Prices drop</li>
                <li>New products</li>
                <li>Best sales</li>
                <li>Contact us</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <h2 className="adderess_text">Newsletter</h2>
            <div className="form-group">
              <input type="text" className="enter_email" placeholder="Enter Your email" name="Name" />
            </div>
            <button className="subscribr_bt">Subscribe</button>
          </div>
        </div>
      </div> 
    </div>
  </div>
  {/* section footer end */}
  <div className="copyright">2019 All Rights Reserved. <a href="https://html.design">Free html  Templates</a></div>
  {/* Javascript files*/}
  {/* sidebar */}
  {/* javascript */} 
</div>

  )
}
