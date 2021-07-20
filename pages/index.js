import Head from 'next/head';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Hero from "../components/hero";
import Container from "../components/container";
import FeaturedListings from '../components/featured-listings';
import TopStories from "../components/top-stories";
import CustomCarousel from "../components/custom-carousel";
import SlidableCarousel from "../components/carousel";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Ghana Prime Properties</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css" />
        {`<!--[if (lt IE 9)]><script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.helper.ie8.js"></script><![endif]--></link>`}
      </Head>

      {/* ***************** NAVBAR ******************* **/}
      <NavBar />

      {/* ***************** HERO ******************* **/}
      <Hero />

      <Container>
        {/* ***************** LISTINGS ON MAP ******************* **/}
        <FeaturedListings />

        {/* ***************** ABOUT US ******************* **/}
        <div className="text-center mt-48">
          <h2 className="text-7xl -mb-1" >Ghana’s Premier</h2>
          <h2 className="text-4xl" >Online Real Estate Platform</h2>
          <p className="text-base leading-7 mt-4">
            Welcome to the nation’s premier online platform for buying,
            <br />
            selling and renting exclusive prime properties
            <br />
            and real Estate in Ghana.
          </p>
        </div>

        {/* *************** BROWSE BY REGIONS ******************* */}
        <div className="mt-32">
          <h1 className="text-2xl border-b-2 pb-4 mb-12">Browse By Regions</h1>
          <div>
            <SlidableCarousel />
          </div>
        </div>


        {/* *************** TOP NEWS ******************* */}
        <TopStories />

        {/* *************** TESTIMONIES ******************* */}
        <div className="my-32 pt-5 space-y-6 border-t-2">
          <h1 className="text-2xl">Featured Listings</h1>
          <CustomCarousel />
        </div>
      </Container>

      {/* ***************** NEWSLETTER ******************* **/}
      <div className="newsletter text-gray-50 bg-gray-800">
        <Container>
          <div className="py-16 flex flex-col items-center">
            <h2 className="text-6xl">Don't get left out!</h2>
            <p className="mt-2">We can send you the best and latest deals and news. Tell us where to send it.</p>
            <div className="flex items-stretch justify-center w-7/12 text-gray-900 bg-gray-300 mt-6 focus-within:outline-white">
              <input className="flex-1 py-4 px-4 rounded-none outline-none focus:bg-gray-100" type="text" placeholder="Enter your email..." />
              <button className="w-16 h-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </div>


      {/* ***************** FOOTER ******************* **/}
        <Footer />

    </div>
  )
}
