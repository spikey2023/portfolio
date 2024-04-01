import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

import { TypeAnimation } from 'react-type-animation'

import { arrow } from '../assets'


const Hero = () => {
  return (
    <section className ="relative w-full h-screen
    mx-auto">
      <div className={`${styles.paddingX} absolute
      inset-0 top-[80px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}>
        <div className="flex flex-col
        justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#4322c5ab]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className = {`${styles.heroHeadText}`}> Hi,{` I'm `}
          <span className="primary-color"> Choudhury Asif Ibne Yusuf</span>
          </h1>
          <h1 className = {`${styles.heroSubText} text-white`}>
          but you can call me {` `}
          <span className="primary-color font-bold"> Spike</span>
          </h1>
          {/* <p className={`${styles.heroSubText} mt-2 
          text-white-100`}>
            I develop web applications <br 
            className='sm:block hidden' /> using javascript.
          </p> */}
           <span className={`${styles.heroSubText} text-white`}> I am a </span>
          <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Engineer',
        1000, // wait 1s before replacing 
        'Frontend Engineer',
        1000,
        'FullStack Developer',
        1000,
      ]}
      wrapper="span"
      speed={25}
      style={{ fontSize: '3rem'}}
      repeat={Infinity}
      className='primary-color font-bold'
    />


        </div>
      </div>
      
      <ComputersCanvas />
        
      <div className='absolute xs:bottom-10
      bottom-32 w-full flex justify-center
      items-center '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] 
          rounded-3xl border-4 border-secondary
          flex justify-center items-start hover:motion-safe:animate-pulse'>
            {/* Framer motion */}
            <motion.div
              animate={{
                y:[0,30,0]
              }}
              transition={{
                duration:3,
                repeat:Infinity,
                repeatType:'loop'
              }}
              
              >
                <img src={arrow} alt="arrow" className='object-cover primary-color ' />
              </motion.div>

          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero