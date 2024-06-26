import {useState, useRef }from 'react'
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'



const Contact = () => {

  const formRef = useRef()

  const [form, setForm] = useState({
      name:"",
      email:"",
      message:"",
    })


  const [loading, setLoading ] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({...form,[name]: value })
  }
  

  const handleSubmit = (e) => {
    //prevent refreshing of the browser
    e.preventDefault()
    setLoading(true)

// use emailjs to send email
    emailjs.send(
      'service_iuux3ul',
      'template_p7lp32h',
      {
       from_name: form.name,
       to_name:"Spike",
       from_email:form.email,
       to_email: 'spikeyusuf2023@gmail.com',
       message:form.message,
      },
      "eZMUVFDlObmVJG1r5"
    )
    .then(()=> {
      setLoading(false);
      alert(`Thanks for reaching out. I will get back to you as soon as possible`)

      setForm({
        name:"",
        email:"",
        message:"",
      })
    },(error)=> {
      setLoading(false)

      console.log(error)

      alert('Something went wrong.')
    })
  }


  return (
    <div className="xl:mt-4 xl:flex-row flex-col-reverse
    flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left","tween",0.2,1)}
        className='flex-1 bg-black-100 px-4 py-2
        rounded-2xl'
        >
          <p className={styles.sectionSubText}> Get in touch</p>
          <h3 className={styles.sectionHeadText}> Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-1 flex flex-col gap-4'
          >
            <label className='flex flex-col'>
              <span className='text-white 
              font-medium mb-2'> Your Name</span>
              <input 
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-tertiary py-2 px-6
                placeholder:text-secondary 
                text-white rounded-lg outline-none
                border-none font-medium'/>
            </label>
            <label className='flex flex-col'>
              <span className='text-white 
              font-medium mb-4'> Your Email</span>
              <input 
                type='text'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className='bg-tertiary py-2 px-6
                placeholder:text-secondary 
                text-white rounded-lg outline-none
                border-none font-medium'/>
            </label>
            <label className='flex flex-col'>
              <span className='text-white 
              font-medium mb-2'> Your Message</span>
              <textarea
                rows= "5"
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say."
                className='bg-tertiary py-4 px-6
                placeholder:text-secondary 
                text-white rounded-lg outline-none
                border-none font-medium'/>
            </label>
            <div className='flex justify-end'>
            <button
              type="submit"
              className ="bg-tertiary py-2 px-8
              outline-none w-fit text-white font-bold
              shadow-primary shadow-md rounded-full use hover:scale-110"
            >
              {loading ? 'Sending Message...': "Send"}
                
            </button>
            </div>
          </form>
      </motion.div>
      
      <motion.div
        variants={slideIn("right","tween",0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px]
         h-[350px]'>
          {/* <EarthCanvas /> */}
      </motion.div>

    </div>
    )
  
}

export default SectionWrapper(Contact,"contact")