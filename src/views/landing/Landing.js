import { Fragment, useEffect, useState } from 'react';

import Header from '../shared/layout/Header';
import Footer from '../shared/layout/Footer';
import './Landing.css';

function Landing() {
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
              <button className="submit bttn-primary">Get Started</button>
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
                      src="/uploads/first.png"
                      className="resposiveimg1"
                      alt="First Slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/uploads/second.png"
                      className="resposiveimg2"
                      alt="Second Slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/uploads/third.png"
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

      <div className="container DesktopMenu">
        <div className="row">
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
                      src="/uploads/first.png"
                      className="resposiveimg1"
                      alt="First Slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/uploads/second.png"
                      className="resposiveimg2"
                      alt="Second Slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/uploads/third.png"
                      className="resposiveimg3"
                      alt="Third Slide"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              <button className="submit bttn-primary">Get Started</button>
            </form>
          </div>
          <div className="col-md-1 col-sm-1"></div>
        </div>
      </div>

      <div className="container-fluid secondcont"></div>

      {/* HIDDEN CONTENT */}
      {showContent && (
        <Fragment>
          <div className="container-fluid secondcont1">
            <div className="row">
              <div className="col-sm-11 col-md-11">
                <p className="para1">
                  The master of hand lettering. The Aristotle of <b>coding</b>.
                  The authority on <b>drone flying</b>. From online courses to
                  coaching and beyond, this is where creative entrepreneurs
                  <b>build the future.</b>
                </p>
              </div>
              <div className="col-sm-1 col-md-1"></div>
            </div>
          </div>

          <div className="container-fluid thirdcont">
            <div className="row poscont">
              <div className="col-md-3 col-sm-3"></div>
              <div className="col-md-9 col-sm-9 colmnnine">
                <section className="text-center">
                  <a
                    data-toggle="modal"
                    data-src="https://www.youtube.com/embed/Jfrjeg26Cwk"
                    data-target="#myModal"
                  >
                    <img src="/uploads/bgimg.png" />
                  </a>
                </section>

                <div
                  className="modal fade"
                  id="myModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="myModalLabel"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-body">
                        <iframe
                          id="iframeYoutube"
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/e80BbX05D7Y"
                          frameBorder="0"
                          allowFullScreen
                          style={{ maxWidth: '-webkit-fill-available' }}
                        ></iframe>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-default"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="textbuild">
                  Build a course, build a brand, build a business. <br />
                  Here is what Teachable can do for you.
                </span>
                <div className="getstart">
                  <a href="#" className="getstartedbtn">
                    {' '}
                    Get started for free{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid thirdcontaine">
            <div className="row thirdrow">
              <div className="col-md-6 col-sm-6">
                <img src="/uploads/first.png" className="responsivefirst" />
              </div>
              <div className="col-md-6 col-sm-6 colmnsix">
                <span className="jointext">
                  Join more than 100,000 creators who’ve
                  <span>
                    <b>sold over $500 million in courses and coaching</b>
                  </span>
                  .
                </span>
                <br />
                <div className="btngetsrt">
                  <a href="#" className="getstartedbtn">
                    {' '}
                    View Features{' '}
                  </a>
                </div>
              </div>
            </div>
            <div className="container-fluid backgoundclr"></div>
            <div className="row colmnfourcont">
              <div className="col-md-4 col-sm-4 easycolmn">
                <div className="colmnfour">1</div>
                <h1 className="texteasy">Easy as it gets.</h1>
                <p className="parae1">
                  In a matter of minutes, you’ll have access to everything you
                  could ever need to create and sell online courses and
                  coaching—our stress-free platform makes it easy—tech skills or
                  no tech skills.
                </p>
              </div>
              <div className="col-md-4 col-sm-4 easycolmn1">
                <div className="colmnfour">2</div>
                <h1 className="texteasy">Teach the way you want to learn.</h1>
                <p className="parae1">
                  This is the fun part. Show off your brand's unique POV by
                  using our customization tools to curate and personalize your
                  content.
                </p>
              </div>
              <div className="col-md-4 col-sm-4 easycolmn2">
                <div className="colmnfour">3</div>
                <h1 className="texteasy">The small matter of getting paid.</h1>
                <p className="parae1">
                  You didn't go into business to stress over money (quite the
                  opposite) so we've got that covered. Payouts, taxes,
                  affiliates, authors, that's our thing—you do yours.
                </p>
              </div>
            </div>
          </div>
          <section
            className="carousel DesktopMenu"
            aria-label="Gallery"
            style={{ paddingTop: '80%', margin: '0 0 -17px 0px' }}
          >
            <ol className="carousel__viewport">
              <li
                id="carousel__slide1"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <div className="container-fluid slidertext">
                    <div className="row forspace"></div>
                    <div className="row">
                      <div className="col-md-6 col-sm-6 ownwords">
                        <div className="contentword">In my own words</div>
                        <div className="text">
                          <p id="online">
                            “What really has clinched it for me, why I chose
                            Teachable, and why I love it and will continue to do
                            my online courses with Teachable, is the great
                            support that they have.”
                          </p>
                          <br />
                        </div>
                        <div className="text1">
                          Julia Stoian : Live. Write. Thrive
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <img src="/uploads/slider1.png" />
                      </div>
                    </div>
                  </div>
                  <a href="#carousel__slide4" className="carousel__prev"></a>
                  <a href="#carousel__slide2" className="carousel__next"></a>
                </div>
              </li>
              <li
                id="carousel__slide2"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <div className="container-fluid slidertext">
                    <div className="row forspace"></div>
                    <div className="row">
                      <div className="col-md-6 col-sm-6 ownwords">
                        <div className="contentword">In my own words</div>
                        <div className="text">
                          <p id="online">
                            "Ninety-five percent of my income comes from online
                            courses. They are literally the perfect product.
                            They're scalable, fun to make, and you help a lot of
                            people. I don’t normally get obsessed with tech. But
                            I am obsessed with Teachable."
                          </p>
                          <br />
                        </div>
                        <div className="text1">
                          Mariah Coz : Marketing for Course Creators
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <img src="/uploads/slide2.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#carousel__slide1" className="carousel__prev"></a>
                <a href="#carousel__slide3" className="carousel__next"></a>
              </li>
              <li
                id="carousel__slide3"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <div className="container-fluid slidertext">
                    <div className="row forspace"></div>
                    <div className="row">
                      <div className="col-md-6 col-sm-6 ownwords">
                        <div className="contentword">In my own words</div>
                        <div className="text">
                          <p id="online">
                            "An online course model has given us a unique kind
                            of flexibility...the marginal cost per student is
                            quite small, allowing us to scale a lot quicker than
                            if we were doing, say, in-person training, or some
                            other kind of high-touch industry service."
                          </p>
                          <br />
                        </div>
                        <div className="text1">
                          Alan Perlman : Drone Pilot Ground School
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <img src="/uploads/slide3.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#carousel__slide2" className="carousel__prev"></a>
                <a href="#carousel__slide4" className="carousel__next"></a>
              </li>
            </ol>
            <aside className="carousel__navigation">
              <ol className="carousel__navigation-list">
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide1"
                    className="carousel__navigation-button"
                  >
                    Go to slide 1
                  </a>
                </li>
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide2"
                    className="carousel__navigation-button"
                  >
                    Go to slide 2
                  </a>
                </li>
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide3"
                    className="carousel__navigation-button"
                  >
                    Go to slide 3
                  </a>
                </li>
              </ol>
            </aside>
          </section>
          <div className="contanierfluid mobilemenu spacingmob"></div>
          <section
            className="carousel mobilemenu"
            aria-label="Gallery"
            style={{ paddingTop: '70%', margin: '0 0 -17px 0px' }}
          >
            <ol className="carousel__viewport">
              <li
                id="carousel__slide11"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <div className="row sliderfrt">
                    <div className="col-md-12col-sm-12 ownwords">
                      <div className="contentword">In my own words</div>
                      <div className="text">
                        “What really has clinched it for me, why I chose
                        Teachable, and why I love it and will continue to do my
                        online courses with Teachable, is the great support that
                        they have.”
                        <br />
                      </div>
                      <div className="text1">
                        Julia Stoian : Live. Write. Thrive
                      </div>
                    </div>
                  </div>
                  <a href="#carousel__slide44" className="carousel__prev"></a>
                  <a href="#carousel__slide22" className="carousel__next"></a>
                </div>
              </li>
              <li
                id="carousel__slide22"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <div className="container-fluid slidertext">
                    <div className="row forspace"></div>
                    <div className="row">
                      <div className="col-md-6 col-sm-6 imageslidemob">
                        <img src="/uploads/slider1.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#carousel__slide1" className="carousel__prev"></a>
                <a href="#carousel__slide3" className="carousel__next"></a>
              </li>
              <li
                id="carousel__slide33"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <div className="container-fluid slidertext">
                    <div className="row forspace"></div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12 ownwords">
                        <div className="contentword">In my own words</div>
                        <div className="text">
                          "Ninety-five percent of my income comes from online
                          courses. They are literally the perfect product.
                          They're scalable, fun to make, and you help a lot of
                          people. I don’t normally get obsessed with tech. But I
                          am obsessed with Teachable."
                          <br />
                        </div>
                        <div className="text1">
                          Mariah Coz : Marketing for Course Creators
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#carousel__slide2" className="carousel__prev"></a>
                <a href="#carousel__slide4" className="carousel__next"></a>
              </li>

              <li
                id="carousel__slide33"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <div className="container-fluid slidertextimageslidemob">
                    <div className="row forspace"></div>
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <img src="/uploads/slide2.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#carousel__slide2" className="carousel__prev"></a>
                <a href="#carousel__slide4" className="carousel__next"></a>
              </li>
              <li
                id="carousel__slide33"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <div className="container-fluid slidertext">
                    <div className="row forspace"></div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12 ownwords">
                        <div className="contentword">In my own words</div>
                        <div className="text">
                          "An online course model has given us a unique kind of
                          flexibility...the marginal cost per student is quite
                          small, allowing us to scale a lot quicker than if we
                          were doing, say, in-person training, or some other
                          kind of high-touch industry service."
                          <br />
                        </div>
                        <div className="text1">
                          Alan Perlman : Drone Pilot Ground School
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#carousel__slide2" className="carousel__prev"></a>
                <a href="#carousel__slide4" className="carousel__next"></a>
              </li>
              <li
                id="carousel__slide44"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <div className="container-fluid slidertext">
                    <div className="row forspace"></div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12 imageslidemob">
                        <img src="/uploads/slide2.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#carousel__slide2" className="carousel__prev"></a>
                <a href="#carousel__slide4" className="carousel__next"></a>
              </li>
              <li
                id="carousel__slide55"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <div className="container-fluid slidertext">
                    <div className="row forspace"></div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12 ownwords">
                        <div className="contentword">In my own words</div>
                        <div className="text">
                          "An online course model has given us a unique kind of
                          flexibility...the marginal cost per student is quite
                          small, allowing us to scale a lot quicker than if we
                          were doing, say, in-person training, or some other
                          kind of high-touch industry service."
                          <br />
                        </div>
                        <div className="text1">
                          Alan Perlman : Drone Pilot Ground School
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#carousel__slide2" className="carousel__prev"></a>
                <a href="#carousel__slide4" className="carousel__next"></a>
              </li>
              <li
                id="carousel__slide66"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <div className="container-fluid slidertext">
                    <div className="row forspace"></div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12 imageslidemob">
                        <img src="/uploads/slide3.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#carousel__slide2" className="carousel__prev"></a>
                <a href="#carousel__slide4" className="carousel__next"></a>
              </li>
            </ol>
            <aside className="carousel__navigation">
              <ol className="carousel__navigation-list">
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide11"
                    className="carousel__navigation-button"
                  >
                    Go to slide 1
                  </a>
                </li>
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide22"
                    className="carousel__navigation-button"
                  >
                    Go to slide 2
                  </a>
                </li>
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide33"
                    className="carousel__navigation-button"
                  >
                    Go to slide 3
                  </a>
                </li>
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide44"
                    className="carousel__navigation-button"
                  >
                    Go to slide 3
                  </a>
                </li>

                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide55"
                    className="carousel__navigation-button"
                  >
                    Go to slide 3
                  </a>
                </li>
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide66"
                    className="carousel__navigation-button"
                  >
                    Go to slide 3
                  </a>
                </li>
              </ol>
            </aside>
          </section>
          <div className="contanierfluid mobilemenu spacingmob"></div>

          <div className="container-fluid bgfullimg">
            <div className="spaceh"></div>
            <div className="row">
              <div className="col-md-5"></div>
              <div className="col-md-2 col-sm-2 featurescod">
                <div className="centertxt">
                  <div className="featuredc">Featured Course</div>
                </div>
              </div>
              <div className="col-md-5"></div>
              <div className="col-md-12 col-sm-12">
                <div className="headingfst1">
                  <h2 className="clarityhead">Fierce Clarity</h2>
                  <p className="innertextby">by</p>
                  <p className="innertextby">Nicole Walters</p>
                  <div className="btngetsrt33">
                    <a href="#" className="getstartedbtn1">
                      {' '}
                      View Course{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid dividedcolmn"></div>

          <div className="container-fluid dividedcolmn1">
            <div className="row">
              <div className="col-md-12 colmntwl">
                <h3 className="headingtext3">Discover</h3>
                <span className="textsee">
                  See how successful creators are bringing their courses to
                  life.
                </span>
              </div>
            </div>
            <div className="row colmfourdivsin">
              <div className="col-md-4 col-sm-4 colmnfourtx">
                <span className="fsttext">:art</span>
                <br />
                <div className="textemail">
                  Lovely and Legible Hand Lettering by Lauren Hom
                </div>
                <div className="textlearn">
                  Learn the lettering process from pencil sketch to inked
                  drawing to digital editing.
                </div>
                <div className="imagesection">
                  <img src="/uploads/magic.png" className="imagesec" />
                </div>
                <div className="btngetsrt1">
                  <a href="#" className="getstartedbtn4">
                    {' '}
                    View Course{' '}
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 colmnfourtx1">
                <span className="fsttext">:business</span>
                <br />
                <div className="textemail">
                  Email Marketing Magic by Pat Flynn
                </div>
                <div className="textlearn1">
                  Learn how to grow your list and send emails people will
                  actually open.
                </div>
                <div className="imagesection">
                  <img src="/uploads/colm1.png" className="imagesec" />
                </div>
                <div className="btngetsrt1">
                  <a href="#" className="getstartedbtn4">
                    {' '}
                    View Course{' '}
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 colmnfourtx2">
                <span className="fsttext">:food</span>
                <br />
                <div className="textemail">SourdoughU by Mike Greenfield</div>
                <div className="textlearn2">
                  Bake the perfect loaf of bread every time with the founder of
                  Pro Home Cooks.
                </div>
                <div className="imagesection">
                  <img src="/uploads/mikegreenfield.png" className="imagesec" />
                </div>
                <div className="btngetsrt1">
                  <a href="#" className="getstartedbtn4">
                    {' '}
                    View Course{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid quickstart">
            <div className="row qrowheight"></div>
            <div className="row quickrow">
              <div className="col-sm-4 col-md-4 quickcolmn">
                <div clas="textquick1">
                  <h4 className="textquick1">Teachable Quickstart Webinar</h4>
                </div>
                <div className="textquick2">
                  <p>
                    Learn how to create your own online school and set up your
                    first course using Teachable (without any technical
                    headaches).
                  </p>
                  <p></p>
                </div>

                <div className="btngetqsrt">
                  <a href="#" className="registerbtn">
                    {' '}
                    Register for webinar{' '}
                  </a>
                </div>
              </div>
              <div className="col-sm-8 col-md-8">
                <div className="imagesection">
                  <img
                    src="/uploads/quickstart.png"
                    className="quickimagesec1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row awardrow1">
              <div className="col-md-6 col-sm-6 awardleft">
                <div className="awardleft1"></div>
                <div className="imagesection">
                  <img
                    src="/uploads/awardwining.png"
                    className="quickimagesec"
                  />
                </div>
                <div className="awardleft1"></div>
              </div>
              <div className="col-md-6 col-sm-6 awardrightt">
                <div className="awardrightt1"></div>
                <div className="textaward">
                  Award-winning support for creators and businesses of all sizes
                  and subjects
                </div>
                <div className="btngetaward">
                  <a href="#" className="awardbtn">
                    {' '}
                    Contact Us{' '}
                  </a>
                </div>
                <div className="awardrightt1"></div>
              </div>
            </div>
          </div>

          <div className="container-fluid signupsec">
            <div className="row signuprow">
              <div className="col-md-12 col-sm-12">
                <div className="textsignup">Share what you know.</div>
                <div className="textsignup1">Sign up free today.</div>
                <div className="getstarsign">
                  <button className="submit bttn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
}

export default Landing;
