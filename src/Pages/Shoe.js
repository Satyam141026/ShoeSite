import React from 'react'
import { NavLink } from 'react-router-dom'
export const Shoe = () => {
  return (
<div>
  &lt;&gt;
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
  {/* New Arrivals section start */}
  <div className="collection_text">Shoes</div>
  <div className="collection_section layout_padding">
    <div className="container">
      <h1 className="new_text"><strong>New Arrivals Products</strong></h1>
      <p className="consectetur_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
    </div>
  </div>
  <div className="layout_padding gallery_section">
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="best_shoes">
            <p className="best_text">Best Shoes </p>
            <div className="shoes_icon"><img src="images/shoes-img4.png" /></div>
            <div className="star_text">
              <div className="left_part">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
              <div className="right_part">
                <div className="shoes_price">$ <span style={{color: '#ff4e5b'}}>60</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="best_shoes">
            <p className="best_text">Best Shoes </p>
            <div className="shoes_icon"><img src="images/shoes-img5.png" /></div>
            <div className="star_text">
              <div className="left_part">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
              <div className="right_part">
                <div className="shoes_price">$ <span style={{color: '#ff4e5b'}}>400</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="best_shoes">
            <p className="best_text">Best Shoes </p>
            <div className="shoes_icon"><img src="images/shoes-img6.png" /></div>
            <div className="star_text">
              <div className="left_part">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
              <div className="right_part">
                <div className="shoes_price">$ <span style={{color: '#ff4e5b'}}>50</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="best_shoes">
            <p className="best_text">Sports Shoes</p>
            <div className="shoes_icon"><img src="images/shoes-img7.png" /></div>
            <div className="star_text">
              <div className="left_part">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
              <div className="right_part">
                <div className="shoes_price">$ <span style={{color: '#ff4e5b'}}>70</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="best_shoes">
            <p className="best_text">Sports Shoes</p>
            <div className="shoes_icon"><img src="images/shoes-img8.png" /></div>
            <div className="star_text">
              <div className="left_part">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
              <div className="right_part">
                <div className="shoes_price">$ <span style={{color: '#ff4e5b'}}>100</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="best_shoes">
            <p className="best_text">Sports Shoes</p>
            <div className="shoes_icon"><img src="images/shoes-img9.png" /></div>
            <div className="star_text">
              <div className="left_part">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
              <div className="right_part">
                <div className="shoes_price">$ <span style={{color: '#ff4e5b'}}>90</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buy_now_bt">
        <button className="buy_text">Buy Now</button>
      </div>
    </div>
  </div>
  {/* New Arrivals section end */}
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
