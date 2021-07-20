import { useEffect, useState } from "react";


const NavBar = () => {

  const [scrollY, setScrollY] = useState(0)

  const handleScroll = (e) => {
    setScrollY(window.pageYOffset)
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    setScrollY(window.pageYOffset);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])


  
  return (
    <div className={` navbar w-full z-50 py-2 top-0 fixed ${scrollY < 50 ? 'bg-transparent' : 'bg-white'} transition-all`}>
      <div className="mx-auto max-w-screen-sm md:max-w-screen-xl flex justify-between items-center">
            {/* Logo  */}
        <img className={`bg-transparent ${scrollY < 50 ? 'text-4xl md:text-5xl mt-5 ' : 'text-xl md:text-2xl   '} w-40 transition-all transform rotate-1 cursor-default text-blue-300 px-4 `} src='/images/Logo-GPP-BLACK&-WHITE.png' alt="Logo" />
        <button className="w-8 text-white cursor-pointer px-1 mr-2 block md:hidden" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="md:flex hidden items-center space-x-8 px-2">
          <a href="/" className=" text-sm px-4 text-gray-300 hover:text-white cursor-pointer py-2 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">Home</a>
          <a href="/" className=" text-sm px-4 text-gray-300 hover:text-white cursor-pointer py-2 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">About Us</a>
          <a href="/" className=" text-sm px-4 text-gray-300 hover:text-white cursor-pointer py-2 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;