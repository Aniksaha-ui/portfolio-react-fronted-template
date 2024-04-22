import { useEffect, useState } from "react";
import useApi from "../../../services/hooks/useApi";

const Home = () =>{
  const api = useApi();
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = async () =>{
      const tourList = await api.page();
      if(tourList && tourList.length > 0){
          await setData(tourList);
          setLoading(false);
      } else {
        console.log(tourList)
      }
    }

    return (
  <main>
  {/* Hero Section Start */}
  <section className="hero-section" id="heroSlideActive">
    <div className="single-hero-slide bg-img-center d-flex align-items-center text-center lazy" data-bg="assets/img/hero_slider/1623595517.jpg">
      <div className="container">
        <div className="slider-text">
          <span className="small-text" data-animation="fadeInDown" data-delay=".3s">Welcome to Hotelia</span>
          <h1 data-animation="fadeInLeft" data-delay=".6s">Luxury Living</h1>
          <a className="btn filled-btn" href="http://example.com/" data-animation="fadeInUp" data-delay=".9s">
            get started <i className="far fa-long-arrow-right" />
          </a>
        </div>
      </div>
    </div>
    <div className="single-hero-slide bg-img-center d-flex align-items-center text-center lazy" data-bg="assets/img/hero_slider/1623595549.jpg">
      <div className="container">
        <div className="slider-text">
          <span className="small-text" data-animation="fadeInDown" data-delay=".3s">Welcome to Hotelia</span>
          <h1 data-animation="fadeInLeft" data-delay=".6s">Luxury Living</h1>
          <a className="btn filled-btn" href="http://example.com/" data-animation="fadeInUp" data-delay=".9s">
            get started <i className="far fa-long-arrow-right" />
          </a>
        </div>
      </div>
    </div>
    <div className="single-hero-slide bg-img-center d-flex align-items-center text-center lazy" data-bg="assets/img/hero_slider/1623595697.jpg">
      <div className="container">
        <div className="slider-text">
          <span className="small-text" data-animation="fadeInDown" data-delay=".3s">Welcome to Hotelia</span>
          <h1 data-animation="fadeInLeft" data-delay=".6s">Luxury Living</h1>
          <a className="btn filled-btn" href="http://example.com/" data-animation="fadeInUp" data-delay=".9s">
            get started <i className="far fa-long-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Hero Section End */}
  {/* Booking Search Form Start */}
  <section className="booking-section">
    <div className="container">
      <div className="booking-form-wrap bg-img-center section-bg">
        <form action="https://codecanyon.kreativdev.com/hotelia/demo/rooms" method="GET">
          <input type="hidden" name="_token" defaultValue="Cna4ecMAJym8KQVqYoiNzfcv7GrR6j3JEW6CQwv6" />            
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6">
              <div className="input-wrap">
                <input type="text" placeholder="Check In / Out Date" id="date-range" name="dates" readOnly />
                <i className="far fa-calendar-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="input-wrap">
                <select name="beds" className="nice-select">
                  <option selected disabled>Beds</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="input-wrap">
                <select name="baths" className="nice-select">
                  <option selected disabled>Baths</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="input-wrap">
                <button type="submit" className="btn filled-btn btn-block rounded-0">
                  search <i className="far fa-long-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="booking-shape-1">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/shape/01.png" alt="shape" />
        </div>
        <div className="booking-shape-2">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/shape/02.png" alt="shape" />
        </div>
        <div className="booking-shape-3">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/shape/03.png" alt="shape" />
        </div>
      </div>
    </div>
  </section>
  {/* Booking Search Form End */}
  {/* Welcome Section Start */}
  <section className="welcome-section section-padding">
    <div className="container">
      <div className="row align-items-center no-gutters">
        {/* Title Gallery Start */}
        <div className="col-lg-6">
          <div className="title-gallery">
            <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/intro_section/1623596538.jpg" alt="image" />
          </div>
        </div>
        {/* Title Gallery End */}
        <div className="col-lg-5 offset-lg-1">
          {/* Section Title */}
          <div className="section-title">
            <span className="title-top with-border">About Us</span>
            <h1>Welcome To Hotelia Modern Hotel Room Sells Services</h1>
            <p>But I must explain to you how all this mistaken idea denouncing pleasure and praising pain was born and I will give you a complec ount of the system, and expound the actual teachin reatexplorer of the truth, the master-builder of human happiness. No ways one rejdislikes, or avoids pleasure itself, because</p>
          </div>
          {/* Counter Start */}
          <div className="counter">
            <div className="row">
              <div className="col-sm-4">
                <div className="counter-box">
                  <i className="far fa-building" />
                  <span className="counter-number">506</span>
                  <p>Luxury Rooms</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="counter-box">
                  <i className="far fa-smile" />
                  <span className="counter-number">700</span>
                  <p>Happy Customers</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="counter-box">
                  <i className="fas fa-wifi" />
                  <span className="counter-number">650</span>
                  <p>Lots of Amenities</p>
                </div>
              </div>
            </div>
          </div>
          {/* Counter End */}
        </div>
      </div>
    </div>
  </section>
  {/* Welcome Section End */}
  {/* Latest Room Section Start */}
  <section className="latest-room section-bg section-padding">
    <div className="container-fluid">
      <div className="row align-items-center no-gutters">
        <div className="col-lg-3">
          {/* Section Title */}
          <div className="section-title">
            <span className="title-top with-border">Featured Rooms</span>
            <h1>Modern Hotel &amp; Room For Luxury Living</h1>
            <p>Ullam corporis suscipit laboriosam nisi ut aliqucoe modi consequatur Quis autem vel eum iure repreh nderitqui in ea voluptate velit esse quam nihil molestiae</p>
            {/* Page Info */}
            <div className="page-Info" />
            {/* Room Arrow */}
            <div className="room-arrows" />
          </div>
        </div>
        <div className="col-lg-8 offset-lg-1">
          <div className="latest-room-slider" id="roomSliderActive">
            <div className="single-room">
              <a className="room-thumb d-block" href="room_details/31/four-points-by-sheraton-manhattan-midtown-west.html">
                <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/rooms/1623648535.jpg" alt />
                <div className="room-price">
                  <p>$ 20.00  / Night</p>
                </div>
              </a>
              <div className="room-desc">
                <div className="room-cat">
                  <a className="d-block p-0" href="rooms9a33.html?category=9">Regular Room</a>
                </div>
                <h4>
                  <a href="room_details/31/four-points-by-sheraton-manhattan-midtown-west.html">Four Points by Sheraton Manhattan Midtown West</a>
                </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                <ul className="room-info">
                  <li><i className="far fa-bed" />2 Beds</li>
                  <li><i className="far fa-bath" />2 Baths</li>
                  <li><i className="far fa-users" />4 Guests</li>
                </ul>
              </div>
            </div>
            <div className="single-room">
              <a className="room-thumb d-block" href="room_details/32/hyatt-place-new-york-citytimes-square.html">
                <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/rooms/1623649132.jpg" alt />
                <div className="room-price">
                  <p>$ 30.00  / Night</p>
                </div>
              </a>
              <div className="room-desc">
                <div className="room-cat">
                  <a className="d-block p-0" href="rooms9a33.html?category=9">Regular Room</a>
                </div>
                <h4>
                  <a href="room_details/32/hyatt-place-new-york-citytimes-square.html">Hyatt Place New York City/Times Square</a>
                </h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                <ul className="room-info">
                  <li><i className="far fa-bed" />1 Bed</li>
                  <li><i className="far fa-bath" />1 Bath</li>
                  <li><i className="far fa-users" />2 Guests</li>
                </ul>
              </div>
            </div>
            <div className="single-room">
              <a className="room-thumb d-block" href="room_details/33/m-social-hotel-times-square-new-york.html">
                <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/rooms/1623649430.jpg" alt />
                <div className="room-price">
                  <p>$ 30.00  / Night</p>
                </div>
              </a>
              <div className="room-desc">
                <div className="room-cat">
                  <a className="d-block p-0" href="rooms25f6.html?category=10">Deluxe Room</a>
                </div>
                <h4>
                  <a href="room_details/33/m-social-hotel-times-square-new-york.html">M Social Hotel Times Square New York</a>
                </h4>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                <ul className="room-info">
                  <li><i className="far fa-bed" />4 Beds</li>
                  <li><i className="far fa-bath" />2 Baths</li>
                  <li><i className="far fa-users" />8 Guests</li>
                </ul>
              </div>
            </div>
            <div className="single-room">
              <a className="room-thumb d-block" href="room_details/34/iroquois-new-york-times-square.html">
                <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/rooms/1623649643.jpg" alt />
                <div className="room-price">
                  <p>$ 40.00  / Night</p>
                </div>
              </a>
              <div className="room-desc">
                <div className="room-cat">
                  <a className="d-block p-0" href="roomsefaf.html?category=11">Suite</a>
                </div>
                <h4>
                  <a href="room_details/34/iroquois-new-york-times-square.html">Iroquois New York Times Square</a>
                </h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
                <ul className="room-info">
                  <li><i className="far fa-bed" />3 Beds</li>
                  <li><i className="far fa-bath" />2 Baths</li>
                  <li><i className="far fa-users" />7 Guests</li>
                </ul>
              </div>
            </div>
            <div className="single-room">
              <a className="room-thumb d-block" href="room_details/35/hampton-inn-times-square-central.html">
                <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/rooms/1623649980.jpg" alt />
                <div className="room-price">
                  <p>$ 50.00  / Night</p>
                </div>
              </a>
              <div className="room-desc">
                <div className="room-cat">
                  <a className="d-block p-0" href="rooms25f6.html?category=10">Deluxe Room</a>
                </div>
                <h4>
                  <a href="room_details/35/hampton-inn-times-square-central.html">Hampton Inn Times Square Central</a>
                </h4>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                <ul className="room-info">
                  <li><i className="far fa-bed" />1 Bed</li>
                  <li><i className="far fa-bath" />1 Bath</li>
                  <li><i className="far fa-users" />2 Guests</li>
                </ul>
              </div>
            </div>
            <div className="single-room">
              <a className="room-thumb d-block" href="room_details/43/hotel-shalimar-motijheel---centre-of-city.html">
                <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/rooms/1640079042.jpg" alt />
                <div className="room-price">
                  <p>$ 20.00  / Night</p>
                </div>
              </a>
              <div className="room-desc">
                <div className="room-cat">
                  <a className="d-block p-0" href="rooms25f6.html?category=10">Deluxe Room</a>
                </div>
                <h4>
                  <a href="room_details/43/hotel-shalimar-motijheel---centre-of-city.html">Hotel Shalimar Motijheel - Centre of City</a>
                </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                <ul className="room-info">
                  <li><i className="far fa-bed" />4 Beds</li>
                  <li><i className="far fa-bath" />3 Baths</li>
                  <li><i className="far fa-users" />20 Guests</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Latest Room Section End */}
  {/* Service Section Start */}
  <section className="service-section section-padding">
    <div className="container">
      {/* Section Title */}
      <div className="section-title text-center">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <span className="title-top">Our Services</span>
            <h1>We Provide Most Exclusive Hotel &amp; Room Services</h1>
          </div>
        </div>
      </div>
      {/* Service Boxes */}
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-service-box text-center wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="200ms">
            <span className="service-counter">1</span>
            <div className="service-icon">
              <i className="far fa-building" />
            </div>
            <h4>Rooms &amp; Appartment</h4>
            <p>Great explorer of the truth the ter...</p>
            <a href="service_details/7/rooms-%26-appartment.html" className="read-more">
              read more <i className="far fa-long-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-service-box text-center wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="400ms">
            <span className="service-counter">2</span>
            <div className="service-icon">
              <i className="far fa-lemon iconpicker-component" />
            </div>
            <h4>Food &amp; Restaurant</h4>
            <p>Great explorer of the truth the ter...</p>
            <a href="service_details/8/food-%26-restaurant.html" className="read-more">
              read more <i className="far fa-long-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-service-box text-center wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="600ms">
            <span className="service-counter">3</span>
            <div className="service-icon">
              <i className="fas fa-hiking" />
            </div>
            <h4>Spa &amp; Fitness</h4>
            <p>Great explorer of the truth the ter...</p>
            <a href="service_details/9/spa-%26-fitness.html" className="read-more">
              read more <i className="far fa-long-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-service-box text-center wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="800ms">
            <span className="service-counter">4</span>
            <div className="service-icon">
              <i className="fas fa-headset" />
            </div>
            <h4>Sports &amp; Gaming</h4>
            <p>Great explorer of the truth the ter...</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-service-box text-center wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="1000ms">
            <span className="service-counter">5</span>
            <div className="service-icon">
              <i className="far fa-calendar-alt" />
            </div>
            <h4>Event &amp; Party</h4>
            <p>Great explorer of the truth the ter...</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-service-box text-center wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="1200ms">
            <span className="service-counter">6</span>
            <div className="service-icon">
              <i className="fas fa-dumbbell iconpicker-component" />
            </div>
            <h4>GYM &amp; Yoga</h4>
            <p>Great explorer of the truth the ter...</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Service Section End */}
  {/* Call To Action Start */}
  <section className="cta-section bg-img-center lazy " data-bg="assets/img/booking-img.jpg">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-10">
          <div className="cta-left-content">
            <span>Looking For Luxury Hotel</span>
            <h1>Book Right Now</h1>
            <a href="http://example.com/" className="btn filled-btn">
              Book Now <i className="far fa-long-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-md-2">
          <div className="video-icon text-right">
            <a href="https://www.youtube.com/watch?v=4eJ8sJGh5dA" className="video-popup"> <i className="fas fa-play" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Call To Action End */}
  {/* Package Section Start */}
  <section className="ma-package-section section-padding featured-packages">
    <div className="container">
      {/* Section Title */}
      <div className="section-title text-center">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <span className="title-top">Featured Tour Packages</span>
            <h1>Take a Look at Our Awesome Packages</h1>
          </div>
        </div>
      </div>
      {/* Package Boxes */}
      <div className="row">
        <div className="col-lg-6">
          <div className="packages-post-item">
            <a className="post-thumbnail d-block" href="package_details/15/usa---western-wonders-(cosmos).html">
              <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/packages/1623598494.jpg" alt="package img" />
            </a>
            <div className="entry-content">
              <h3 className="title">
                <a href="package_details/15/usa---western-wonders-(cosmos).html">USA - Western Wonders (Cosmos)</a>
              </h3>
              <div className="post-meta">
                <ul>
                  <li><span><i className="fas fa-comment-dollar" /><strong>Package Price:</strong> $ 120.00  (FIXED)</span></li>
                  <li><span><i className="fas fa-users" /><strong>Number of Days:</strong> 3</span></li>
                  <li><span><i className="fas fa-users" /><strong>Maximum Persons:</strong> 5</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="packages-post-item">
            <a className="post-thumbnail d-block" href="package_details/16/grand-bargain-tour-of-usa-(holiday-saving-account).html">
              <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/packages/1623598923.jpg" alt="package img" />
            </a>
            <div className="entry-content">
              <h3 className="title">
                <a href="package_details/16/grand-bargain-tour-of-usa-(holiday-saving-account).html">Grand Bargain Tour Of USA (Holiday Saving Account)</a>
              </h3>
              <div className="post-meta">
                <ul>
                  <li><span><i className="fas fa-comment-dollar" /><strong>Package Price:</strong> $ 40.00  (PER-PERSON)</span></li>
                  <li><span><i className="fas fa-users" /><strong>Number of Days:</strong> 1</span></li>
                  <li><span><i className="fas fa-users" /><strong>Maximum Persons:</strong> 6</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="packages-post-item">
            <a className="post-thumbnail d-block" href="package_details/17/customizable---las-vegas---a-la-carte.html">
              <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/packages/1623599177.jpg" alt="package img" />
            </a>
            <div className="entry-content">
              <h3 className="title">
                <a href="package_details/17/customizable---las-vegas---a-la-carte.html">Customizable - Las Vegas - A La Carte</a>
              </h3>
              <div className="post-meta">
                <ul>
                  <li><span><i className="fas fa-comment-dollar" /><strong>Package Price:</strong> NEGOTIABLE</span></li>
                  <li><span><i className="fas fa-users" /><strong>Number of Days:</strong> 3</span></li>
                  <li><span><i className="fas fa-users" /><strong>Maximum Persons:</strong> 7</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="packages-post-item">
            <a className="post-thumbnail d-block" href="package_details/18/orlando---ala-carte.html">
              <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/packages/1623599575.jpg" alt="package img" />
            </a>
            <div className="entry-content">
              <h3 className="title">
                <a href="package_details/18/orlando---ala-carte.html">Orlando - Ala Carte</a>
              </h3>
              <div className="post-meta">
                <ul>
                  <li><span><i className="fas fa-comment-dollar" /><strong>Package Price:</strong> $ 180.00  (FIXED)</span></li>
                  <li><span><i className="fas fa-users" /><strong>Number of Days:</strong> 5</span></li>
                  <li><span><i className="fas fa-users" /><strong>Maximum Persons:</strong> 5</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="packages-post-item">
            <a className="post-thumbnail d-block" href="package_details/19/miami---a-la-carte.html">
              <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/packages/1623600032.jpg" alt="package img" />
            </a>
            <div className="entry-content">
              <h3 className="title">
                <a href="package_details/19/miami---a-la-carte.html">Miami - A La Carte</a>
              </h3>
              <div className="post-meta">
                <ul>
                  <li><span><i className="fas fa-comment-dollar" /><strong>Package Price:</strong> $ 30.00  (PER-PERSON)</span></li>
                  <li><span><i className="fas fa-users" /><strong>Number of Days:</strong> 1</span></li>
                  <li><span><i className="fas fa-users" /><strong>Maximum Persons:</strong> 3</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="packages-post-item">
            <a className="post-thumbnail d-block" href="package_details/20/san-francisco---a-la-carte.html">
              <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/packages/1623602478.jpg" alt="package img" />
            </a>
            <div className="entry-content">
              <h3 className="title">
                <a href="package_details/20/san-francisco---a-la-carte.html">San Francisco - A La Carte</a>
              </h3>
              <div className="post-meta">
                <ul>
                  <li><span><i className="fas fa-comment-dollar" /><strong>Package Price:</strong> $ 20.00  (PER-PERSON)</span></li>
                  <li><span><i className="fas fa-users" /><strong>Number of Days:</strong> 6</span></li>
                  <li><span><i className="fas fa-users" /><strong>Maximum Persons:</strong> 4</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Package Section End */}
  {/* Why Choose Us/Facility Section Start */}
  <section className="wcu-section section-bg section-padding">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 offset-lg-1">
          {/* Section Title */}
          <div className="feature-left">
            <div className="section-title">
              <span className="title-top with-border">Why Choose Us</span>
              <h1>We Care You &amp; We Feel What’s Needs For Good Living</h1>
            </div>
            <ul className="feature-list">
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="100ms">
                <div className="feature-icon"><i className="fas fa-swimmer" /></div>
                <h4>Relex Living</h4>
                <p>Dreat explorer of the truth, the master-builder of human happines one rejects, dislikes avoids</p>
              </li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="200ms">
                <div className="feature-icon"><i className="fas fa-shield-alt" /></div>
                <h4>High Security System</h4>
                <p>Procure him some great pleasure. To take a trivial example, which of us ever undertakes labor</p>
              </li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="300ms">
                <div className="feature-icon"><i className="far fa-calendar-alt" /></div>
                <h4>Such Events &amp; Party</h4>
                <p>Libero tempore, cum soluta nobis est eligenoptio cumque nihil impedit quo minus id quod</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="feature-img">
            <div className="feature-abs-con">
              <div className="f-inner">
                <i className="far fa-stars" />
                <p>Popular Features</p>
              </div>
            </div>
            <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/facility_section/1623656923.jpg" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Why Choose Us/Facility Section End */}
  {/* Feedback Section Start */}
  <section className="feedback-section section-padding">
    <div className="container">
      {/* Section Title */}
      <div className="section-title text-center">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <span className="title-top">Clients Feedback</span>
            <h1>What Our Satisfied Clients Say About Us</h1>
          </div>
        </div>
      </div>
      <div className="feadback-slide" id="feedbackSlideActive">
        <div className="single-feedback-box">
          <p>Omnis voluptas assumde est omnis dolor reporibus autem quidam et aut ciise debitiset arerum neces tibus saep on ways feels like ways.</p>
          <h5 className="feedback-author">James M. Varney</h5>
        </div>
        <div className="single-feedback-box">
          <p>At vero eos et accusamu way set iusto odio dignis ducimus qui bpraes enum voluptatum deleniti atque corrupti quos dolores others worlds.</p>
          <h5 className="feedback-author">David K. Vinson</h5>
        </div>
        <div className="single-feedback-box">
          <p>Omnis voluptas assumde est omnis dolor reporibus autem quidam et aut ciise debitiset arerum neces tibus saep on ways feels like ways.</p>
          <h5 className="feedback-author">James M. Varney</h5>
        </div>
      </div>
    </div>
  </section>
  {/* Feedback Section End */}
  {/* Brands Section Start */}
  <section className="brands-section primary-bg">
    <div className="container">
      <div id="brandsSlideActive" className="row">
        <a className="brand-item text-center d-block" href="http://example.com/" target="_blank">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/brands/1624260969.png" alt="brand image" />
        </a>
        <a className="brand-item text-center d-block" href="http://example.com/" target="_blank">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/brands/1624260980.png" alt="brand image" />
        </a>
        <a className="brand-item text-center d-block" href="http://example.com/" target="_blank">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/brands/1624260990.png" alt="brand image" />
        </a>
        <a className="brand-item text-center d-block" href="http://example.com/" target="_blank">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/brands/1624261000.png" alt="brand image" />
        </a>
        <a className="brand-item text-center d-block" href="http://example.com/" target="_blank">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/brands/1624261012.png" alt="brand image" />
        </a>
        <a className="brand-item text-center d-block" href="http://example.com/" target="_blank">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/brands/1624261023.png" alt="brand image" />
        </a>
        <a className="brand-item text-center d-block" href="http://example.com/" target="_blank">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/brands/1624261034.png" alt="brand image" />
        </a>
      </div>
    </div>
  </section>
  {/* Brands Section End */}
</main>

    )
}

export default Home;