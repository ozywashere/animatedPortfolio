import './services.scss'
import { motion,useInView } from "framer-motion"
import { useRef } from 'react';
const variants = {
  initial : {
    x : -500 ,
    y: 100 ,

  } ,
  animate : {
    x : 0 ,
    y: 0 ,
    transition : {
      duration : 1 ,
      staggerChildren : 0.1,
    }

  }
}

export const Services = () => {

  
  const ref = useRef (  );

  const isInView=useInView(
    ref
  )
  return (
    <motion.div className="services"
                variants={variants}
                initail="initial"
                animate={isInView ? "animate" : "initial"}
                ref={ref}>
    <motion.div className="textContainer" variants={variants}>
      <p>
        I focus on helping your brand grow
        <br/> and move forward.
      </p>
      <hr/>
    </motion.div>
    <motion.div className="titleContainer" variants={variants}>
      <div className="title">
        <img src="/people.webp" alt=""/>
        <h1><b>Unique</b> Ideas </h1>
      
      </div>
      <div className="title">
        <h1><b>For your</b> Business</h1>
        <button>
          What We Do
        </button>
      </div>
    </motion.div>
    <motion.div className="listContainer"  variants={variants}>
      <motion.div className="box" whileHover={ { background : "lightGray" , color : "black" } }>
        <h2>Branding</h2>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>
        <button>Learn More</button>
      </motion.div>
      <motion.div className="box" whileHover={ { background : "lightGray" , color : "black" } }  variants={variants}>
        <h2>Branding</h2>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>
        <button>Learn More</button>
      </motion.div>
      <motion.div className="box" whileHover={ { background : "lightGray" , color : "black" } }  variants={variants}>
        <h2>Branding</h2>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>
        <button>Learn More</button>
      </motion.div>
      <motion.div className="box" whileHover={ { background : "lightGray" , color : "black" } }>
        <h2>Branding</h2>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>
        <button>Learn More</button>
      </motion.div>
    </motion.div>
  </motion.div> )
}