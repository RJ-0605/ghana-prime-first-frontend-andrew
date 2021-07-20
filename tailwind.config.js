module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       backgroundImage: theme => ({
         "hero-image": "url('https://th.bing.com/th/id/R6456abb3a0a5adc3db8b51eccc465e37?rik=oYt5gScpeYMckA&riu=http%3a%2f%2fimages.dailyhive.com%2f20160919115313%2fReal-estate-in-Vancouver-Shutterstock.jpg&ehk=b1j%2btOwjQI62cmjh2v0rfXh1pFaSHc5BnpwPhXrvnL0%3d&risl=&pid=ImgRaw')",
       })
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }