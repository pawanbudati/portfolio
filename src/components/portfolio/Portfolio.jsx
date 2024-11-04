import { useEffect, useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2 className="project-title">{item.title}</h2>
            <p>{item.desc}</p>
            <a  className="project-url" 
                target="_blank" 
                href={item.url} 
                rel="noreferrer"
                >
                  {"visit "}<b>{item.title}</b>{" "}
                  <i className="bi bi-box-arrow-up-right" />
            </a>
            <div className="skill-container">
              <fieldset>
                <legend>Skills Used</legend>
                  {
                    item.skills?.map((skillName, index) => (
                        <button className={"skill-btn skill-"+skillName} 
                                key={index}
                            >
                            <span>
                              {skillName}
                            </span>
                        </button>
                      )
                    )
                  }
                </fieldset>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({id, role, items}) => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // View port animations are handled here
  const parentClassName = "portfolio"
  const componentAnimationMap = new Map([
    // [K, V]
    ["progress", "focus-in-expand"],
    ["project-title", "focus-in-expand-noblur"],
  ])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry =>{

        let {classList} = entry.target || {};
        classList = classList || [];
        
        let targetAnimationClass = "";
        classList.forEach(className => {
          let tempAnimationClass = componentAnimationMap.get(className);
          if(tempAnimationClass){
            targetAnimationClass = tempAnimationClass;
          }
        })
        if(!targetAnimationClass) throw "Animation class not mapped!";
        const {target} = entry;
        if(entry.isIntersecting){
          target.classList.add(targetAnimationClass);
        }else{
          target.classList.remove(targetAnimationClass);
        }
      })
    });
    componentAnimationMap.forEach((animationNames, className) =>{
        let elementList = document.querySelectorAll(`.${parentClassName} .${className}`) || [];
        elementList.forEach((element, key) => {
          observer.observe(element)
        })

    })
  }, [])

  return (
    <div className={parentClassName} id={id} ref={ref}>
      <div className="progress">
        <h1>{role}</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
