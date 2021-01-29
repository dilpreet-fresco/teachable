import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../styles/style.css';

function Header() {
  return (
    <Fragment>
      <div className="mobilemenu">
        <nav className="navbar navbar-default mobilemenu" role="navigation">
          <div className="navbar-header">
            <nav className="navbar navbar-light bg-lignt">
              <img
                src="/uploads/teachable_wordmark.png"
                className="teachableimgmob"
              />
              <button
                className="navbar-toggler ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#collapsingNavbar2"
              >
                <span className="navbar-toggler-icon my-toggler"></span>
              </button>
              <div className="navbar-collapse collapse" id="collapsingNavbar2">
                <ul className="nav navbar-nav navbar-right">
                  <li data-toggle="collapse" data-target="#navbar-collapse.in">
                    <Link to="/features">Features</Link>
                  </li>
                  <li data-toggle="collapse" data-target="#navbar-collapse.in">
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li data-toggle="collapse" data-target="#navbar-collapse.in">
                    <a href="#top">Blog</a>
                  </li>
                  <li data-toggle="collapse" data-target="#navbar-collapse.in">
                    <a href="#top">Courses</a>
                  </li>
                  <li data-toggle="collapse" data-target="#navbar-collapse.in">
                    <Link to="/about">About</Link>
                  </li>
                  <li data-toggle="collapse" data-target="#navbar-collapse.in">
                    <a href="#top" className="loginbt">
                      Login
                    </a>
                    <a href="#top" className="getbtn">
                      Get Started
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </nav>
      </div>

      <div className="DesktopMenu">
        <div className="topnav" id="myTopnav">
          <div className="row">
            <div className="col-sm-8 col-md-8 secondcol1">
              <Link to="/">
                <img
                  src="/uploads/teachable_wordmark.png"
                  className="teachableimg"
                />
              </Link>
              <Link to="/features">Features</Link>
              <Link to="/pricing">Pricing</Link>
              <a href="#contact">Blog</a>
              <a href="#about">Courses</a>
              <Link to="/about">About</Link>
              <a href="/" className="icon">
                <i className="fa fa-bars"></i>
              </a>
            </div>
            <div className="col-sm-2 col-md-2 logincol1">
              <a href="#home">Login</a>
            </div>

            <div className="col-sm-2 col-md-2 getstartedli">
              <a href="#news">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
