import { Fragment, useEffect, useState } from 'react';

import Footer from '../shared/layout/Footer';
import Header from '../shared/layout/Header';
import './Pricing.css';

function Pricing() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!showContent) {
        setShowContent(true);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="container mobilemenu">
        <div className="row">
          <div className="col-md-5 col-sm-5 colmnright1">
            <span className="firsttext"> Share what you </span>
            <span className="secondtext">
              <b>know.</b>
            </span>
            <span className="fallback-font">TM</span>
            <br />
            <span className="thirdtext">
              Create online courses and coaching services. Transform your
              experience and know-how into a thriving knowledge business.
            </span>
            <form className="formstyl">
              <input
                type="text"
                placeholder="Your email here"
                className="inputemail"
              />
              <button className="submit bttn-primary"> Get Started </button>
            </form>
          </div>
          <div className="col-md-6 col-sm-6 halfleftcro">
            <div className="container-lg my-3 halfcolmn">
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="uploads/first.png"
                      className="resposiveimg1"
                      alt="First Slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="uploads/second.png"
                      className="resposiveimg2"
                      alt="Second Slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="uploads/third.png"
                      className="resposiveimg3"
                      alt="Third Slide"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1"></div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row pricingrowfst">
          <div className="col-md-5 col-sm-5 colmnrightun">
            <span className="pfirsttext">
              {' '}
              Unlimited courses and students on all paid plans.{' '}
            </span>
          </div>
          <div className="col-md-6 col-sm-6 ">
            <div className="container-lg my-3 ">
              <div
                id="myCarousel"
                className="carousel slide pointer-event"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="uploads/courses.png"
                      className="resposiveimg10"
                      alt="First Slide"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-1 col-sm-1"></div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-4"></div>
          <div className="col-md-4 col-sm-4 tabspillscolm">
            <ul className="nav nav-pills">
              <li>
                <a
                  data-toggle="pill"
                  href="#home"
                  style={{
                    borderTopLeftRadius: '25px !important',
                    borderBottomLeftRadius: '25px !important',
                    border: 'solid 1px #C8E3D8',
                    padding: '12px 40px 11px 37px',
                    color: '#1B4942',
                  }}
                >
                  Monthly
                </a>
              </li>
              <li className="active">
                <a
                  data-toggle="pill"
                  href="#menu1"
                  style={{
                    borderTopRightRadius: '25px !important',
                    borderBottomRightRadius: '25px !important',
                    border: 'solid 1px #C8E3D8',
                    padding: '12px 40px 11px 37px',
                    color: '#1B4942',
                  }}
                >
                  Annual
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-4"></div>
        </div>

        <div className="tab-content">
          <div id="home" className="tab-pane fade ">
            <div className="row">
              <div className="col-md-4 col-sm-4 pricecol1">
                <div className="thirdtextspace"></div>
                <div className="textemailbasic"> Basic</div>
                <p className="innertextfeature">
                  Create your first online course
                </p>
                <span className="pricetxt"> $39 </span>
                <span className="thirdtextp"> Per month</span>
                <br />
                <button className="submit bttn-primary"> Select Plan</button>
                <br />
                <div className="thirdtextp">Includes all base features:</div>
                <ol>
                  <li className="thirdtextpl">Unlimited students</li>
                  <li className="thirdtextpl">5% transaction fees</li>
                  <li className="thirdtextpl">Course product</li>
                  <li className="thirdtextpl">Coaching product</li>
                  <li className="thirdtextpl">Members-only community</li>

                  <li className="thirdtextpl">
                    Instant payouts
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title="Applies if you set up Teachable Payments. If on Monthly Payment Gateway, receive PayPal deposits once a month with a 30-day delay"
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>{' '}
                  </li>
                  <li className="thirdtextpl">
                    2 admin-level users
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" Admin users include primary owner, owners, and authors."
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>
                  </li>
                  <li className="thirdtextpl">Product support</li>
                  <li className="thirdtextpl">
                    Course creator training
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" Access to training courses in TeachableU"
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>{' '}
                  </li>
                  <li className="thirdtextpl">Custom domain support</li>
                  <li className="thirdtextpl">Coupon codes</li>
                  <li className="thirdtextpl">Drip course content</li>
                  <li className="thirdtextpl">Integrated email marketing</li>
                  <li className="thirdtextpl">
                    Third-party integrations
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" Includes Facebook, Google Analytics, Sumo, Segement, Mailchimp, Convert Kit and Zapier Triggers"
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>
                  </li>
                </ol>
              </div>
              <div className="col-md-4 col-sm-4 pricecol2">
                <div className="thirdtextrecom">Recommended</div>
                <div className="textemailbasic"> Pro</div>
                <p className="innertextfeature">Our most popular plan</p>
                <span className="pricetxt"> $119 </span>
                <span className="thirdtextp"> Per month</span>
                <br />
                <button className="submit bttn-primary"> Select Plan</button>
                <br />
                <div className="thirdtextp">
                  Includes everything in Basic, plus:
                </div>
                <ol>
                  <li className="thirdtextpl">Unlimited students</li>
                  <li className="thirdtextpl">
                    No transaction fees
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title="Transactions processed by the Monthly Payment Gateway for schools that were created before 10/9/18 will be subject to a 2% transaction fee."
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>
                  </li>
                  <li className="thirdtextpl">Course product</li>
                  <li className="thirdtextpl">Coaching product</li>
                  <li className="thirdtextpl">Members-only community</li>

                  <li className="thirdtextpl">
                    Instant payouts
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title="Applies if you set up Teachable Payments or custom payment gateway. If on Monthly Payment Gateway, or non-custom PayPal gateway, receive PayPal deposits once a month with a 30-day delay"
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>
                  </li>
                  <li className="thirdtextpl">
                    5 admin-level users
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" Admin users include primary owner, owners, and authors."
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>{' '}
                  </li>
                  <li className="thirdtextpl">Priority product support</li>
                  <li className="thirdtextpl">Graded quizzes</li>
                  <li className="thirdtextpl">
                    Advanced reports
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" On courses, students, videos, and upsells"
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>
                  </li>
                  <li className="thirdtextpl">
                    Unbranded website
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" Please note that secure URLs (e.g. login and checkout pages) and myTeachable (including the mobile app) are exceptions where there will be some indications that Teachable is powering the site."
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>
                  </li>
                  <li className="thirdtextpl">
                    Course completion certificates
                  </li>
                  <li className="thirdtextpl">Course compliance</li>
                  <li className="thirdtextpl">
                    Integrated affiliate marketing{' '}
                  </li>
                </ol>
              </div>

              <div className="col-md-4 col-sm-4 pricecol3">
                <div className="thirdtextspace"></div>
                <div className="textemailbasic"> Business</div>
                <p className="innertextfeature">
                  Experience the best of Teachable
                </p>
                <span className="pricetxt">$299</span>
                <span className="thirdtextp"> Per month</span>
                <br />
                <button className="submit bttn-primary"> Select Plan</button>
                <br />
                <div className="thirdtextp">Includes all base features:</div>
                <ol>
                  <li className="thirdtextpl">Unlimited students</li>
                  <li className="thirdtextpl">No transaction fees</li>
                  <li className="thirdtextpl">Course product</li>
                  <li className="thirdtextpl">Coaching product</li>
                  <li className="thirdtextpl">Members-only community</li>

                  <li className="thirdtextpl">
                    Instant payouts
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title="Applies if you set up Teachable Payments or custom payment gateway. If on Monthly Payment Gateway, or non-custom PayPal gateway, receive PayPal deposits once a month with a 30-day delay"
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>{' '}
                  </li>
                  <li className="thirdtextpl">
                    20 admin-level users
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" Admin users include primary owner, owners, and authors. For more than 20 admins, contact Sales."
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>{' '}
                  </li>
                  <li className="thirdtextpl">Priority product support</li>
                  <li className="thirdtextpl">
                    Manual student imports
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" Access to training courses in TeachableU"
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>{' '}
                  </li>
                  <li className="thirdtextpl">Bulk student enrollments</li>
                  <li className="thirdtextpl">Custom user roles</li>
                  <li className="thirdtextpl">Advanced theme customization</li>
                  <li className="thirdtextpl">
                    Group coaching calls
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" Group strategy calls with customer success managers"
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div id="menu1" className="tab-pane fade in active">
            <div className="row">
              <div className="col-md-4 col-sm-4 pricecol1">
                <div className="thirdtextspace"></div>
                <div className="textemailbasic"> Basic</div>
                <p className="innertextfeature">
                  Create your first online course
                </p>
                <span className="pricetxt"> $29 </span>
                <span className="thirdtextp"> Per month (Billed annually)</span>
                <br />
                <button className="submit bttn-primary"> Select Plan</button>
                <br />
                <div className="thirdtextp">Includes all base features:</div>
                <ol>
                  <li className="thirdtextpl">Unlimited students</li>
                  <li className="thirdtextpl">5% transaction fees</li>
                  <li className="thirdtextpl">Course product</li>
                  <li className="thirdtextpl">Coaching product</li>
                  <li className="thirdtextpl">Members-only community</li>

                  <li className="thirdtextpl">
                    Instant payouts
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title="Applies if you set up Teachable Payments. If on Monthly Payment Gateway, receive PayPal deposits once a month with a 30-day delay"
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>
                  </li>
                  <li className="thirdtextpl">
                    2 admin-level users
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" Admin users include primary owner, owners, and authors."
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>{' '}
                  </li>
                  <li className="thirdtextpl">Product support</li>
                  <li className="thirdtextpl">
                    Course creator training
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" Access to training courses in TeachableU"
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>{' '}
                  </li>
                  <li className="thirdtextpl">Custom domain support</li>
                  <li className="thirdtextpl">Coupon codes</li>
                  <li className="thirdtextpl">Drip course content</li>
                  <li className="thirdtextpl">Integrated email marketing</li>
                  <li className="thirdtextpl">
                    Third-party integrations
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" Includes Facebook, Google Analytics, Sumo, Segement, Mailchimp, Convert Kit and Zapier Triggers"
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>
                  </li>
                </ol>
              </div>

              <div className="col-md-4 col-sm-4 pricecol2">
                <div className="thirdtextrecom">Recommended</div>
                <div className="textemailbasic"> Pro</div>
                <p className="innertextfeature">Our most popular plan</p>
                <span className="pricetxt"> $99 </span>
                <span className="thirdtextp"> Per month (Billed annually)</span>
                <br />
                <button className="submit bttn-primary"> Select Plan</button>
                <br />
                <div className="thirdtextp">
                  Includes everything in Basic, plus:
                </div>
                <ol>
                  <li className="thirdtextpl">Unlimited students</li>
                  <li className="thirdtextpl">
                    No transaction fees
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title="Transactions processed by the Monthly Payment Gateway for schools that were created before 10/9/18 will be subject to a 2% transaction fee."
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>
                  </li>
                  <li className="thirdtextpl">Course product</li>
                  <li className="thirdtextpl">Coaching product</li>
                  <li className="thirdtextpl">Members-only community</li>

                  <li className="thirdtextpl">
                    Instant payouts
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title="Applies if you set up Teachable Payments or custom payment gateway. If on Monthly Payment Gateway, or non-custom PayPal gateway, receive PayPal deposits once a month with a 30-day delay"
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>
                  </li>
                  <li className="thirdtextpl">
                    5 admin-level users
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" Admin users include primary owner, owners, and authors."
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>
                  </li>
                  <li className="thirdtextpl">Priority product support</li>
                  <li className="thirdtextpl">Graded quizzes</li>
                  <li className="thirdtextpl">
                    Advanced reports
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" On courses, students, videos, and upsells"
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>
                  </li>
                  <li className="thirdtextpl">
                    Unbranded website
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" Please note that secure URLs (e.g. login and checkout pages) and myTeachable (including the mobile app) are exceptions where there will be some indications that Teachable is powering the site."
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>
                  </li>
                  <li className="thirdtextpl">
                    Course completion certificates
                  </li>
                  <li className="thirdtextpl">Course compliance</li>
                  <li className="thirdtextpl">
                    Integrated affiliate marketing{' '}
                  </li>
                </ol>
              </div>

              <div className="col-md-4 col-sm-4 pricecol3">
                <div className="thirdtextspace"></div>
                <div className="textemailbasic"> Business</div>
                <p className="innertextfeature">
                  Experience the best of Teachable
                </p>
                <span className="pricetxt">$249</span>
                <span className="thirdtextp"> Per month (Billed annually)</span>
                <br />
                <button className="submit bttn-primary"> Select Plan</button>
                <br />
                <div className="thirdtextp">Includes all base features:</div>
                <ol>
                  <li className="thirdtextpl">Unlimited students</li>
                  <li className="thirdtextpl">No transaction fees</li>
                  <li className="thirdtextpl">Course product</li>
                  <li className="thirdtextpl">Coaching product</li>
                  <li className="thirdtextpl">Members-only community</li>

                  <li className="thirdtextpl">
                    Instant payouts
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title="Applies if you set up Teachable Payments or custom payment gateway. If on Monthly Payment Gateway, or non-custom PayPal gateway, receive PayPal deposits once a month with a 30-day delay"
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>
                  </li>
                  <li className="thirdtextpl">
                    20 admin-level users
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" Admin users include primary owner, owners, and authors. For more than 20 admins, contact Sales."
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>
                  </li>
                  <li className="thirdtextpl">Priority product support</li>
                  <li className="thirdtextpl">
                    Manual student imports
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" Access to training courses in TeachableU"
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>{' '}
                  </li>
                  <li className="thirdtextpl">Bulk student enrollments</li>
                  <li className="thirdtextpl">Custom user roles</li>
                  <li className="thirdtextpl">Advanced theme customization</li>
                  <li className="thirdtextpl">
                    Group coaching calls
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=" Group strategy calls with customer success managers"
                    >
                      <i
                        className="fa fa-info-circle"
                        aria-hidden="true"
                        style={{ color: '#222' }}
                      ></i>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showContent && (
        <Fragment>
          <div className="container-fluid">
            <div className="space"></div>
            <div className="row ">
              <div className="col-md-12 col-sm-12">
                <div className="centerdcontent">Included in all plans</div>
                <div className="spacesmall"></div>
              </div>
            </div>
            <div className="row plansrow">
              <div className="col-md-4 col-sm-4">
                <div className="innercontentprice">
                  <i className="fa fa-check" aria-hidden="true"></i>Unlimited
                  video
                </div>
                <div className="innercontentprice">
                  <i className="fa fa-check" aria-hidden="true"></i>Unlimited
                  courses
                </div>
                <div className="innercontentprice">
                  <i className="fa fa-check" aria-hidden="true"></i>Unlimited
                  hosting
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="innercontentprice">
                  <i className="fa fa-check" aria-hidden="true"></i>Integrated
                  payment <span className="innerspan">processing</span>
                </div>
                <div className="innercontentprice">
                  <i className="fa fa-check" aria-hidden="true"></i>Student
                  management
                </div>
                <div className="innercontentprice">
                  <i className="fa fa-check" aria-hidden="true"></i>Lecture
                  comments
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="innercontentprice">
                  <i className="fa fa-check" aria-hidden="true"></i>Basic
                  quizzes
                </div>
                <div className="innercontentprice">
                  <i className="fa fa-check" aria-hidden="true"></i>No fees on
                  free <span className="innerspan">courses</span>
                </div>
                <div className="innercontentprice">
                  <i className="fa fa-check" aria-hidden="true"></i>VAT
                  (value-added tax) <span className="innerspan">for EU</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-sm-12 compareplan">
                <div className="btngetsrt1">
                  <a href="#" className="getstartedbtn4">
                    {' '}
                    Compare Plans{' '}
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-sm-6">
                <div className="space"></div>
                <div className="compareinner">
                  Not sure which plan is right for your business?
                </div>
                <div className="btngetsrtcom">
                  <a href="#" className="getstartedbtn4">
                    {' '}
                    Compare Plans{' '}
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-sm-6">
                <div className="space"></div>
                <div className="compareinner">
                  Not sure which plan is right for your business?
                </div>
                <div className="btngetsrtcom">
                  <a href="#" className="getstartedbtn4">
                    {' '}
                    Compare Plans{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid textcenter">
            <div className="row awardrow1">
              <div className="col-md-6 col-sm-6 awardleft">
                <div className="awardleft1"></div>
                <div className="centertxtcom">
                  <div className="featuredc">In my own words</div>
                </div>
                <div className="textawardcom">
                  “I made $169,000 from the launch of my first two online
                  courses. Teachable made it incredibly easy to create
                  high-quality products from scratch.”
                </div>
                <div className="textawardiv">
                  Pat Flynn : Smart Passive Income
                </div>
                <div className="awardleft1"></div>
              </div>
              <div className="col-md-6 col-sm-6 awardrightt">
                <div className="awardrightt1"></div>
                <div className="imagesection">
                  <img
                    src="uploads/rightroad.png"
                    className="quickimagesection"
                  />
                </div>

                <div className="awardrightt1"></div>
              </div>
            </div>
          </div>

          <div className="container-fluid signupseccom">
            <div className="row signuprow">
              <div className="col-md-12 col-sm-12">
                <div className="textsignup"> Share what you know.™</div>
                <div className="textsignup1"> Sign up free today.</div>
                <div className="getstarsign">
                  <button className="submit bttn-primary"> Get Started </button>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
      <Footer />
      <script>
        {`
          $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();   
          });
        `}
      </script>
    </Fragment>
  );
}

export default Pricing;
