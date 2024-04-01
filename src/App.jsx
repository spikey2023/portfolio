import  { BrowserRouter } from 'react-router-dom'

import { Suspense } from 'react'
import CanvasLoader from './components/Loader'

import { About, Contact, Experience, Feedbacks, Hero, 
  Navbar, Tech, Works, StarsCanvas , Footer } from './components'

const App = () => {
  return (
  <BrowserRouter>
  <div className ="relative z-0 scroll-smooth" >
    <div className ="bg-cover bg-no-repeat bg-center">
      <Navbar />
      <div className='bg-gradient-to-b from-evening to-primary'>
        <Hero/>
      </div>
    </div>
    <div className=" bg-gradient-to-b from-primary to-evening via-black">
      <About />
    <Tech />
    {/* <Experience /> */}
    </div>
    <div className= "bg-gradient-to-b from-evening to-primary via-primary">
    <Works />
    </div>
    <div className ="relative z-0 bg-primary">
      <Contact />
      <StarsCanvas />
      <Footer />
    </div>
    </div>
    </BrowserRouter>
    


  )
}


export default App
 