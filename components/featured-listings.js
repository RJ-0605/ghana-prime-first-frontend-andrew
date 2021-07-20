import MapBox from "./mapbox"

const FeaturedListings = () => {
  return (
    <div className="-mt-8 w-full shadow-md flex relative z-10 bg-gray-200">
      <div className="w-2/4 ">
        <MapBox />
      </div>

      <div className="flex flex-col flex-1">

        <div className="max-h-72 overflow-hidden flex-1">
          <img src="https://th.bing.com/th/id/R6456abb3a0a5adc3db8b51eccc465e37?rik=oYt5gScpeYMckA&riu=http%3a%2f%2fimages.dailyhive.com%2f20160919115313%2fReal-estate-in-Vancouver-Shutterstock.jpg&ehk=b1j%2btOwjQI62cmjh2v0rfXh1pFaSHc5BnpwPhXrvnL0%3d&risl=&pid=ImgRaw" />
        </div>

        <div className="flex flex-col items-start pt-5 pl-5 pr-5 flex-1">
          <div className="flex justify-between w-full">
          <h1 className="text-2xl">Saint Helena, CA, US</h1>
          <p className="text-xl font-bold">$18,500,000</p>
          </div>
          <div className="flex flex-col mb-8">
            <p className="text-base">
              Sotheby's International Realty <br/>
              - Wine Country <br/> 
              - East Napa Street Brokerage <br/>
            </p>
          </div>
          <a className="py-2 px-5 mt-auto -ml-5 border-b-2 link-with-hover-effect hover:text-white">View property</a>
        </div>


      </div>
    </div>
  )
}

export default FeaturedListings;