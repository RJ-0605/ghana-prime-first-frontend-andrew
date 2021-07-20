import Container from './container'

const footer = () => {

    return(
        <div className="footer bg-gray-900">
            <Container>
                <div className="py-16 divide-y space-y-16 divide-gray-800">

                {/* top part of the footer  **/}
                <div className="footer-top flex justify-center space-x-36">
                    <div className="text-gray-300">
                    <h2 className="mb-2 font-bold text-xl">Ghana Prime Properties</h2>
                    <p>
                        <span title="address">
                        F/214 Basel Road
                        Osu,<br />
                        Accra Ghana, West Africa.
                        </span>
                        <br /><br />
                        GH <a title="Ghana Contact Number" href="tel: +233201111151">+233 - 20 11111 51</a><br />
                        US <a title="US Contact Number" href="tel: +18179088639">+1 - 817 908 8639</a>
                        <br /><br />
                        <a title="Email" href="mailto: info@ghanaprimeproperties.com">
                        info@ghanaprimeproperties.com
                        </a>
                    </p>
                    </div>
                    <div className="text-gray-300">
                    <h2 className="mb-2 font-bold text-xl">Properties</h2>
                    <ul className="space-y-4">
                        <li>
                        <a href="#">
                            Land for Sale
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Commercial Properties
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Residential Properties
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Short Stay Properties
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Property Developments
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            Submit a Listing
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="text-gray-300">
                    <h2 className="mb-2 font-bold text-xl">Global Partners</h2>
                    <ul className="space-y-4">
                        <li>
                        PropTiger
                        </li>
                        <li>
                        Realtor
                        </li>
                        <li>
                        MansionGlobal.jp
                        </li>
                        <li>
                        Housing.com
                        </li>
                        <li>
                        Makaan
                        </li>
                    </ul>
                    </div>
                </div>

                {/* bottom part of the footer  **/}
                <div className="footer-bottom pt-4 flex justify-between items-center">
                    <h4 className="copyright text-gray-600">Copyright, Ghana Prime Properties 2021</h4>
                    <div className="social-links flex flex-wrap space-x-4">
                    <a href="facebook.com" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-800 text-white text-lg">
                        <i className='bx bxl-facebook'></i>
                    </a>
                    <a href="instagram.com" className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-red-400 text-xl">
                        <i className='bx bxl-instagram-alt'></i>
                    </a>
                    <a href="twitter.com" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400 text-white text-xl">
                        <i className='bx bxl-twitter'></i>
                    </a>
                    <a href="whatsapp.com" className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white text-xl">
                        <i className='bx bxl-whatsapp'></i>
                    </a>
                    </div>
                </div>
                </div>
            </Container>
            </div>
    )

}

export default footer;


      


