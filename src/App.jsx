import  { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Feedbacks, Hero, 
  Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {
  return (
  <BrowserRouter>
  <div className ="relative z-0" >
    <div className ="bg-cover bg-no-repeat bg-center">
      <Navbar />
      <div className='bg-day'>
        <Hero/>
      </div>
    </div>
    <div className=''>
      <About />
    </div>
    <Experience />
    <div>
    <Tech />
    </div>
    <div>
    <Works />
    </div>
    {/* <Feedbacks /> */}
    <div className ="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
    </div>
    </BrowserRouter>
  )
}


export default App
 