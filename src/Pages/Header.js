import React from 'react'
import { NavLink } from 'react-router-dom'
export const Header = () => {
  return (
<div>

  <div className="header_section">
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
    <div className="banner_section">
      <div className="container-fluid">
        <section className="slide-wrapper">
          <div className="container-fluid">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              {/* Indicators */}
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
                <li data-target="#myCarousel" data-slide-to={3} />
              </ol>
              {/* Wrapper for slides */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-2 padding_0">
                      <p className="mens_taital">Men Shoes</p>
                      <div className="page_no">0/2</div>
                      <p className="mens_taital_2">Men Shoes</p>
                    </div>
                    <div className="col-sm-5">
                      <div className="banner_taital">
                        <h1 className="banner_text">New Running Shoes </h1>
                        <h1 className="mens_text"><strong>Men's Like Plex</strong></h1>
                        <p className="lorem_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="buy_bt">Buy Now</button>
                        <button className="more_bt">See More</button>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="shoes_img"><img src="images/running-shoes.png" /></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-2 padding_0">
                      <p className="mens_taital">Men Shoes</p>
                      <div className="page_no">0/2</div>
                      <p className="mens_taital_2">Men Shoes</p>
                    </div>
                    <div className="col-sm-5">
                      <div className="banner_taital">
                        <h1 className="banner_text">New Running Shoes </h1>
                        <h1 className="mens_text"><strong>Men's Like Plex</strong></h1>
                        <p className="lorem_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="buy_bt">Buy Now</button>
                        <button className="more_bt">See More</button>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="shoes_img"><img src="images/running-shoes.png" /></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-2 padding_0">
                      <p className="mens_taital">Men Shoes</p>
                      <div className="page_no">0/2</div>
                      <p className="mens_taital_2">Men Shoes</p>
                    </div>
                    <div className="col-sm-5">
                      <div className="banner_taital">
                        <h1 className="banner_text">New Running Shoes </h1>
                        <h1 className="mens_text"><strong>Men's Like Plex</strong></h1>
                        <p className="lorem_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="buy_bt">Buy Now</button>
                        <button className="more_bt">See More</button>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="shoes_img"><img src="images/running-shoes.png" /></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-2 padding_0">
                      <p className="mens_taital">Men Shoes</p>
                      <div className="page_no">0/2</div>
                      <p className="mens_taital_2">Men Shoes</p>
                    </div>
                    <div className="col-sm-5">
                      <div className="banner_taital">
                        <h1 className="banner_text">New Running Shoes </h1>
                        <h1 className="mens_text"><strong>Men's Like Plex</strong></h1>
                        <p className="lorem_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="buy_bt">Buy Now</button>
                        <button className="more_bt">See More</button>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="shoes_img"><img src="images/running-shoes.png" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>			
      </div>
    </div>
  </div>
</div>

  )
}
