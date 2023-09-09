import Navbar from "./(components)/navbar/navbar"
import Link from "next/link";
import TextCard from '../app/(components)/cards/textCard'
import ImageCard from '../app/(components)/cards/imageCard'
import TestimonialCard from "./(components)/cards/testimonialCard"
import CampusCard from "./(components)/cards/campusCard"

function Home() {
  return (
    <>

      <section className="header">
        <Navbar />
        <div className="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <Link href="/contact" className="hero_btn">Visit Us To Know More</Link>
        </div>
      </section>

      <section className="course">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <TextCard title="Undergraduate Programs" />
          <TextCard title="Graduate Programs" />
          <TextCard title="Adult Learning & Degree Completion" />
        </div>
      </section>
      {/* <!-- Course Section End --> */}

      {/* <!-- Campus Section Start--> */}

      <section className="campus">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <CampusCard campus="DELHI" campusImg="img/Campus1.png"/>
          <CampusCard campus="HYDERABAD" campusImg="img/Campus2.png"/>
          <CampusCard campus="MUMBAI" campusImg="img/Campus3.png"/>
        </div>
      </section>
      {/* <!-- Campus Section End --> */}

      {/* <!-- Facilities Section Start --> */}
      <section className="facilities">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <ImageCard source="/img/libary.png" title="Best Libary" />
          <ImageCard source="/img/playground.png" title="Athletics" />
          <ImageCard source="/img/food.png" title="Tasty and Healthy Food" />
        </div>
      </section>
      {/* <!-- Facilities Section End --> */}

      {/* <!-- Testimonials Section Start --> */}
      <section className="testimonials">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <TestimonialCard/>
          <TestimonialCard/>
        </div>
      </section>
      {/* <!-- Testimonials Section End --> */}

      {/* <!-- Call To Action Section Start --> */}
      <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Link href="/contact" className="hero_btn">Contact Us</Link>
      </section>
      {/* <!-- Call To Action Section End --> */}


    </>
  )
}
export default Home