import SmallNewsCard from "./news-card-sm"

const TopStories = () => {
  return (
    <div className="my-32 pt-5 space-y-6 border-t-2">
      <h1 className="text-2xl">Top News</h1>
      <div className="flex items-start">

        <div className="flex-1 space-y-8" >
          <div className="main-story space-y-6">
            <div className="h-80 overflow-hidden relative">
              <img src="https://th.bing.com/th/id/R6456abb3a0a5adc3db8b51eccc465e37?rik=oYt5gScpeYMckA&riu=http%3a%2f%2fimages.dailyhive.com%2f20160919115313%2fReal-estate-in-Vancouver-Shutterstock.jpg&ehk=b1j%2btOwjQI62cmjh2v0rfXh1pFaSHc5BnpwPhXrvnL0%3d&risl=&pid=ImgRaw" />
              <a className="link-with-hover-effect absolute bottom-0 left-0 py-2 px-5 z-50 text-gray-200" href="/">View story</a>
            </div>
            <h1 className="text-4xl">Vice Co-Founder to List Santa Monica Compound for $50 Million</h1>
          </div>
          <div className="border-t space-y-4 py-4">
            <h1 className="">Other Stories</h1>
            <div className="grid grid-cols-2 gap-x-6 gap-y-12">
              <SmallNewsCard
                title="Hotelier Avi Brosh Asking $3.2 Million for L.A. Home Overlooking Chateau Marmont"
                category="celebrity homes"
                img="https://th.bing.com/th/id/R6456abb3a0a5adc3db8b51eccc465e37?rik=oYt5gScpeYMckA&riu=http%3a%2f%2fimages.dailyhive.com%2f20160919115313%2fReal-estate-in-Vancouver-Shutterstock.jpg&ehk=b1j%2btOwjQI62cmjh2v0rfXh1pFaSHc5BnpwPhXrvnL0%3d&risl=&pid=ImgRaw"
              />
              <SmallNewsCard
                title="Manhattan Luxury Market Has ‘Stellar’ Week"
                category="celebrity homes"
                img="https://th.bing.com/th/id/R6456abb3a0a5adc3db8b51eccc465e37?rik=oYt5gScpeYMckA&riu=http%3a%2f%2fimages.dailyhive.com%2f20160919115313%2fReal-estate-in-Vancouver-Shutterstock.jpg&ehk=b1j%2btOwjQI62cmjh2v0rfXh1pFaSHc5BnpwPhXrvnL0%3d&risl=&pid=ImgRaw"
              />
              <SmallNewsCard
                title="For First Time in 5 Years, Britain’s £1 Million-Plus Market Sees Growth"
                category="celebrity homes"
                img="https://th.bing.com/th/id/R6456abb3a0a5adc3db8b51eccc465e37?rik=oYt5gScpeYMckA&riu=http%3a%2f%2fimages.dailyhive.com%2f20160919115313%2fReal-estate-in-Vancouver-Shutterstock.jpg&ehk=b1j%2btOwjQI62cmjh2v0rfXh1pFaSHc5BnpwPhXrvnL0%3d&risl=&pid=ImgRaw"
              />
              <SmallNewsCard
                title="Hotelier Avi Brosh Asking $3.2 Million for L.A. Home Overlooking Chateau Marmont"
                category="celebrity homes"
                img="https://th.bing.com/th/id/R6456abb3a0a5adc3db8b51eccc465e37?rik=oYt5gScpeYMckA&riu=http%3a%2f%2fimages.dailyhive.com%2f20160919115313%2fReal-estate-in-Vancouver-Shutterstock.jpg&ehk=b1j%2btOwjQI62cmjh2v0rfXh1pFaSHc5BnpwPhXrvnL0%3d&risl=&pid=ImgRaw"
              />
              <SmallNewsCard
                title="Hotelier Avi Brosh Asking $3.2 Million for L.A. Home Overlooking Chateau Marmont"
                category="celebrity homes"
                img="https://th.bing.com/th/id/R6456abb3a0a5adc3db8b51eccc465e37?rik=oYt5gScpeYMckA&riu=http%3a%2f%2fimages.dailyhive.com%2f20160919115313%2fReal-estate-in-Vancouver-Shutterstock.jpg&ehk=b1j%2btOwjQI62cmjh2v0rfXh1pFaSHc5BnpwPhXrvnL0%3d&risl=&pid=ImgRaw"
              />
              <SmallNewsCard
                title="Hotelier Avi Brosh Asking $3.2 Million for L.A. Home Overlooking Chateau Marmont"
                category="celebrity homes"
                img="https://th.bing.com/th/id/R6456abb3a0a5adc3db8b51eccc465e37?rik=oYt5gScpeYMckA&riu=http%3a%2f%2fimages.dailyhive.com%2f20160919115313%2fReal-estate-in-Vancouver-Shutterstock.jpg&ehk=b1j%2btOwjQI62cmjh2v0rfXh1pFaSHc5BnpwPhXrvnL0%3d&risl=&pid=ImgRaw"
              />
            </div>
          </div>
        </div>

        <div className="w-72 sticky top-14 ml-5 ">
          <div className="rounded-none">
            <img src="https://th.bing.com/th/id/R6456abb3a0a5adc3db8b51eccc465e37?rik=oYt5gScpeYMckA&riu=http%3a%2f%2fimages.dailyhive.com%2f20160919115313%2fReal-estate-in-Vancouver-Shutterstock.jpg&ehk=b1j%2btOwjQI62cmjh2v0rfXh1pFaSHc5BnpwPhXrvnL0%3d&risl=&pid=ImgRaw" />
          </div>
          <a className="link-with-hover-effect py-2 px-5 w-full block" href="/">View more stories</a>
        </div>
      </div>
    </div>
  )
}

export default TopStories;