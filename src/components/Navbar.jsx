import React,  {useEffect, useState} from 'react'

// used to navigate to other parts of our page
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'


const Navbar = () => {
  const [active, setActive] = useState('')
  const [ toggle, setToggle] = useState(false)
  return (
    <nav
      className = {`${styles.paddingX} w-full flex
      items-center py-2 fixed top-0 
      z-20 bg-primary bg-opacity-80 bg-clip-padding
      backdrop-blur`}
      >
        <div className="w-full flex justify-between
        items-center max-w-7xl mx-auto"> 
          <Link 
          to = "/"
          className = "flex items-center gap-2"
          onClick = {() => {
            setActive("")
            //scrolls to the top of the page
            window.scrollTo(0,0)
          }}
          >
            {/* <img src={logo} alt="logo" className="w-9
            h-9 object-contain" /> */}
            <p className='primary-color text-[18px]
            font-bold cursor-pointer flex'>Spike Yusuf <span
              className = "sm:block hidden">
              </span></p>
            </Link>
            <ul className="list-none hidden sm:flex
            flex-row gap-10">
              {navLinks.map((link)=> (
                <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "primary-color"
                    : "text-secondary"
                } hover:text-white text-[18px]
                font-medium cursor-pointer
                `}
                onClick={()=> setActive(link.title)}
                >
                  <a href={`#${link.id}`}> {link.title}</a>
                </li>
              ))}
            </ul>
            <div className="sm:hidden flex flex-1
            justify-end items-center">
              <img 
                src= {toggle ? close : menu}
                alt = "menu"
                className= "w-[28px] h-[28px]
                object-contain cursor-pointer"
                onClick ={()=> setToggle(!toggle)}
              />

              <div className={`${!toggle ? "hidden"
              :'flex'} p-6 black-gradient absolute
              top-20 right-0 mx-4 my-2 min-w-[140px]
              z-10 rounded-xl`}>

                <ul className="list-none flex justify-end
                items-start flex-col gap-4">
              {navLinks.map((link)=> (
                <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white"
                    : "text-secondary"
                } font-poppins font-medium 
                cursor-pointer text-[16px]`}
                onClick={()=> {
                  setToggle(!toggle)
                  setActive(link.title)}}
                >
                  <a href={`#${link.id}`}> {link.title}</a>
                </li>
              ))}
            </ul>

              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar