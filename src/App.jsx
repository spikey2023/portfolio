import  { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Feedbacks, Hero, 
  Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {
  return (
  <BrowserRouter>
  <div className ="relative z-0" >
    <div className ="bg-cover bg-no-repeat bg-center">
      <Navbar />
      <div className='bg-gradient-to-b from-day to-midday'>
        <Hero/>
      </div>
    </div>
    <div className=" bg-gradient-to-b from-midday to-evening via-black">
      <About />
    <Experience />
    </div>
    <div className= "bg-gradient-to-b from-evening to-primary">
    <Tech />
    <Works />
    </div>
    {/* <Feedbacks /> */}
    <div className ="relative z-0 bg-primary">
      <Contact />
      <StarsCanvas />
    </div>
    </div>
    </BrowserRouter>
  )
}


export default App
 