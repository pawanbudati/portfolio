import "./hero.scss";
import { motion } from "framer-motion";

const {staticLabels} = window;

const textVariants = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            {staticLabels.title?.toUpperCase()}
          </motion.h2>
          <motion.h1 variants={textVariants}>
            {staticLabels.designation}
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            {
              staticLabels.homeButtons.map((button, index) =>{

                return <motion.button key={index} variants={textVariants}>
                  <a href={button.target}>
                    {button.title}
                  </a>
                </motion.button>
              })
            }
          </motion.div>
        </motion.div>
      </div>
      <div className="imageContainer">
        <img src="/pavan.jpg" alt="profile picture" />
      </div>
    </div>
  );
};

export default Hero;
