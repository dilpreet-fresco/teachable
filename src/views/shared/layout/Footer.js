import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Fragment>
      <div className="container-fluid footersec">
        <div className="row">
          <div className="col-md-5 col-sm-5">
            <div className="imagesection">
              <Link to="/">
                <img src="/uploads/footerlogo.png" className="footerlogo" />
              </Link>
            </div>
            <p className="footerpara">
              Join the more than 100,000 creators who use Teachable to share
              their knowledge. Easily create an online course or coaching
              business with our powerful yet simple all-in-one platform.
            </p>
          </div>
          <div className="col-md-1 col-sm-1"></div>
          <div className="col-md-2 col-sm-2 footerclm">
            <div className="fheading">Explore</div>
            <div className="innercontent">
              <Link to="/features" className="footerlink">
                Features
              </Link>
              <br />
              <Link to="/pricing" className="footerlink">
                Pricing
              </Link>
              <br />
              <Link to="/examples" className="footerlink">
                Examples
              </Link>
              <br />
              <a href="#" className="footerlink">
                Courses
              </a>
            </div>
          </div>
          <div className="col-md-2 col-sm-2 footerclm">
            <div className="fheading">Company</div>
            <div className="innercontent">
              <a href="#" className="footerlink">
                About
              </a>
              <br />
              <a href="#" className="footerlink">
                Career
              </a>
              <br />
              <a href="#" className="footerlink">
                Blogs
              </a>
              <br />
              <a href="#" className="footerlink">
                Affiliates
              </a>
            </div>
          </div>
          <div className="col-md-2 col-sm-2 footerclm">
            <div className="fheading">Support</div>
            <div className="innercontent">
              <Link to="/features" className="footerlink">
                Features
              </Link>
              <br />
              <a href="#" className="footerlink">
                Knowlege Base
              </a>
              <br />
              <a href="#" className="footerlink">
                Contact Support
              </a>
              <br />
              <a href="#" className="footerlink">
                Contact Sales
              </a>
              <br />
              <a href="#" className="footerlink">
                Privacy Policy
              </a>
              <br />
              <a href="#" className="footerlink">
                Terms of use
              </a>
              <br />
              <a href="#" className="footerlink">
                Cookies Policy
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footerbotm1"></div>
      <div className="container-fluid footerbotm">
        <div className="row footerrow">
          <div className="col-md-6">
            <div className="copyrightxt">
              Copyright © 2021 Teachable, Inc. All rights reserved.
            </div>
          </div>
          <div className="col-md-6 socialicons">
            <a href="#">
              {' '}
              <i className="fa fa-youtube-play" aria-hidden="true"></i>
            </a>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-pinterest-p" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
