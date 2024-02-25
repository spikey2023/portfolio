import { motion } from 'framer-motion'


import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

//higher order component 
const SectionWrapper = (Component,idName) => 
function HOC() {
    return(
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView={"show"}
            // animation speed
            viewport={{ once:true, amount: 0.10}}
            className={`${styles.padding} max-w-7xl
                mx-auto relative z-0`}>
            {/* added scroll */}
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section>
    )
}

export default SectionWrapper