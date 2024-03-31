import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"


import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { profile } from '../assets'


import { SectionWrapper } from '../hoc'

const ServiceCard= ({index, title, icon})=>{
  return (
    <Tilt className = "xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index,
           0.75)}
          className='w-full green-pink-gradient p-
          [1px] rounded-[20px] shadow-card'>

            <div options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
                className='bg-BF0000 rounded-[20px]
                py-5 px-12 min-h-[280px] flex 
                justify-evenly items-center flex-col'>

                  <img src={icon} alt={title}
                  className="w-16 h-16 object-contain" />
                  <h3 className='text-white text-[20px]
                  font-bold text-center'
                  >{title}</h3>
            </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    
    {/* <div className="mt-20 flex flex-wrap gap-10 ">
      {services.map((service,index) => (
        <ServiceCard key ={service.title} index=
        {index} {...service}/>
      ))}
    </div> */}
          
    <motion.div variants = {textVariant()}>
        <p className= {styles.sectionSubText}
        > Introduction</p>
        <h2 className={styles.sectionHeadText}
        >About.</h2>
    </motion.div>

    <div className='container py-5 mx-auto flex gap-5 justify-between'>
      
      {/* left */}
      <div className='my-auto basis-3/4 pr-5'>
      <motion.p
          variants={fadeIn("","",0.1,1)}
          className='mt-4 text-secondary text-[17px]
           leading-[30px]'
      >
        Hey, my name is Choudhury Asif Ibne Yusuf, but I also go by Spike. 
       I am a software developer based in Phoenix, Arizona, US. My journey into the 
        tech world started with my hobby of building PCs and evolved as I gained experience 
        as an Epic Application Analyst for hospitals utilizing Epic's Electronic Health Record (EHR) system.
        I delved deeper into software development through self-study and eventually completed the Fullstack 
        Academy Software Engineering program to further enhance my skills. I discovered that coding not only fulfills my 
        passion for problem-solving but also allows me to make a creative impact.
        I am always curious to learn more about new technologies and indulge in creative coding.

       When I am not at the computer, you can usually find me hiking, spending time with my two cats, or experimenting with cooking new recipes.
    </motion.p>
    </div>
      {/* right */}
      <div className='relative basis-1/4 pr-5'>
        <img 
              src={profile} 
              alt= {profile}
              className="h-full rounded-full object-cover overflow-hidden"
              />  
      </div>
     
    
    </div>


    </>
  )
}

export default SectionWrapper ( About, "about")