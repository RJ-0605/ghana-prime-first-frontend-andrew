import Head from 'next/head';
import NavBar from '../components/navbar';
import Container from '../components/container';
import Footer from '../components/footer';
import Property_Hero from '../components/property_hero';
// import '../styles/property_new.css'




  

const Property = () => {
    return(
        <div className="overflow-x-hidden">
         <Head>
            <title>Ghana Prime Properties</title>
            




         </Head>
        {/* ***************** NAVBAR ******************* **/}
        <NavBar />
        {/* Container */}
        <Container >


            <br></br>
            <br></br>
<div className="mt-40">        
    <span className="">
      <a style={{"color":"#B91C1C"}} href="">For Sale </a> /
      <a style={{"color":"#B91C1C"}} href="">  England </a> / 
      <a style={{"color":"#B91C1C"}} href="">  London </a>  / 
      <a style={{"color":"#B91C1C"}} href="">  Studio </a>  / 
      <a style={{"color":"#B91C1C"}} href="">  470 Lucy Forks, Patriciafurt, YC7B</a>
    </span>
    <br></br>
    <br></br>
 </div>

  <div class="flex flex-wrap md:-m-2 -m-1" >

      <div class="flex flex-wrap  w-3/6 sm:w-3/6 ">
        
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block rounded-lg " src="https://dummyimage.com/600x361" />
        </div>
      </div>
      <div class="flex flex-wrap w-1/6 sm:w-1/6 ">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block rounded-lg" src="https://dummyimage.com/502x302" />
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full object-cover h-full object-center block rounded-lg" src="https://dummyimage.com/502x302" />
        </div>        
      </div>

    </div>
  

  <div className="my-28"></div>




{/* Images arrangement  */}






 
        {/* Description and Ratings  */}

        <div className="grid grid-cols-1  ">


          <div className="w-1/2 divide-y  divide-opacity-25 ">

                <div>
                    <h1>Description</h1>

                        <p class="leading-relaxed mb-4 mt-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>                    
                        
                        <p className="mb-2"style={{"color":"blue"}}>View More</p>
                        
                        <p className="font-bold py-4">Ratings</p>
                        <div className="flex space-x-1">
                        <svg class="h-8 w-8 text-yellow-300 my-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                        </svg>
                        <svg class="h-8 w-8 text-yellow-300 my-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                        </svg>
                        <svg class="h-8 w-8 text-yellow-300 my-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                        </svg>
                        </div>

                </div>

                <div className="mb-8">2</div>
                 {/* vertical divide   */}
                <div className="mt-4 mb-8 h-auto">
                <div class="grid grid-cols-3 divide-x divide-green-500">
                    <div h-auto w-32 p-6 px-4 mx-2>Last 30 days: 920 page views</div>
                    <div h-auto w-32 p-6>2</div>
                    <div h-auto w-32 p-6>3</div>
                </div>
                </div>
              
          </div>

        {/* Description and Ratings  */}

        {/* form for interest in property */}
          <div className="">
            <form class="w-full max-w-sm">
                <div class="flex items-center border-b border-gray-500 py-2">
                  <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name" />
                  <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                Sign Up
                  </button>
                  <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" >
                Cancel
                  </button>
              </div>
            </form>            

          </div>
          {/* form for for interest in property  */}


        </div>




{/* ---------- */}
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">

    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
</div>
</section>


             {/* New  addition */}

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col">
      <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-indigo-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">More Plush Apartments</h1>
        {/* <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p> */}
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-sm ">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Eden Valley</h2>
        <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Lets go...
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-sm ">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504" />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The Mirage</h2>
        <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Lets go..
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-sm ">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505" />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The Gallery</h2>
        <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Lets go ...
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>












            <br></br>
        </ Container>

        {/* Footer */}
        <Footer />

        </div>

    )
}

export default Property;