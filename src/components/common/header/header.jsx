const { Fragment } = require("react")

const Header = ()=>{

    return (
        <Fragment>
               <header className>
  <div className="header-top-area section-bg">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-xl-4 col-lg-7 offset-xl-3 col-md-6 d-md-block d-none">
          <ul className="top-contact-info list-inline">
            <li><i className="far fa-map-marker-alt" />Dhaka, Bangladesh</li>
            <li><i className="far fa-phone" />0123456789</li>
          </ul>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-6">
          <div className="top-right">
            <ul className="top-menu list-inline d-inline">
              <li><a href="user/login.html"><i className="fas fa-sign-in-alt mr-1" /> Login</a></li>
              <li><a href="user/signup.html"><i className="fas fa-user-plus mr-1" /> Signup</a></li>
            </ul>
            <ul className="top-social-icon list-inline d-md-inline-block d-none">
              <li>
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
              </li>
              <li>
                <a href="https://www.google.com/"><i className="fab fa-google" /></a>
              </li>
              <li>
                <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a>
              </li>
              <li>
                <a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="header-menu-area">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-lg-2 col-md-4 col-7">
          <div className="logo">
            <a href="https://codecanyon.kreativdev.com/hotelia/demo">
              <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/1630128686.png" alt="website logo" />
            </a>
          </div>
        </div>
        <div className="col-lg-10 col-md-8 col-5">
          <div className="menu-right-area text-right">
            <div className="lang-select">
              <div className="lang-img">
                <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/icons/languages.png" alt="flag" width={45} />
              </div>
              <div className="lang-option">
                <form action="https://codecanyon.kreativdev.com/hotelia/demo/change_language" method="GET">
                  <select className="nice-select" name="lang_code" onchange="this.form.submit()">
                    <option value="en" selected>
                      English
                    </option>
                    <option value="ar">
                      عربى
                    </option>
                  </select>
                </form>
              </div>
            </div>
            <nav className="main-menu">
              <ul className="list-inline">
                <li className="have-submenu">
                  <a href="#">Home</a>
                  <ul className="submenu">
                    <li><a href="https://codecanyon.kreativdev.com/hotelia/demo?theme=theme_one&home=slider">Slider Version</a></li>
                    <li><a href="https://codecanyon.kreativdev.com/hotelia/demo?theme=theme_one&home=static">Static Version</a></li>
                    <li><a href="https://codecanyon.kreativdev.com/hotelia/demo?theme=theme_one&home=video">Video Version</a></li>
                    <li><a href="https://codecanyon.kreativdev.com/hotelia/demo?theme=theme_one&home=water">Water Version</a></li>
                    <li><a href="https://codecanyon.kreativdev.com/hotelia/demo?theme=theme_one&home=particles">Paticles Version</a></li>
                    <li><a href="https://codecanyon.kreativdev.com/hotelia/demo?theme=theme_one&home=parallax">Parallax Version</a></li>
                  </ul>
                </li>
                <li className="have-submenu">
                  <a href="#" target="_self">About</a>
                  <ul className="submenu">
                    <li className="have-submenu">
                      <a href="#" target="_self">Custom Pages</a>
                      <ul className="submenu">
                        <li><a href="about-us.html" target="_self">About Us</a></li>
                        <li><a href="terms-%26-conditions.html" target="_self">Terms &amp; Conditions</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="faqs.html" target="_self">FAQs</a>
                    </li>
                  </ul>
                </li>
                <li><a href="services.html" target="_self">Services</a></li>
                <li><a href="rooms.html" target="_self">Rooms</a></li>
                <li><a href="packages.html" target="_self">Packages</a></li>
                <li><a href="blogs.html" target="_self">Blogs</a></li>
                <li><a href="gallery.html" target="_self">Gallery</a></li>
                <li><a href="contact.html" target="_self">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="mobilemenu" />
    </div>
  </div>
</header>

        </Fragment>
        
    )
}

export default Header;