import { useEffect } from "react";
import "./navbar.scss";

const {staticLabels} = window;

const Navbar = () => {

  const parentClassName = "navbar"
  // View port animations are handled here
  const componentAnimationMap = new Map([
    // [K, V]
    ["wrapper", "focus-in-expand"],
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
    <div className={parentClassName}>
      <div className="wrapper">
        <span></span>
        <div className="imageContainer">
          <img src="/pavan.jpg" alt="profile picture" />
        </div>
        <div className="social">
          {
            staticLabels.navbarLinks?.map((linkItem, index) =>(
            <a key={index} className={"navlink "+(linkItem.keepMove?" infinite ":"")} href={linkItem.redUrl}>
              {linkItem.title+" "}
              {
                linkItem.icon ? 
                  <i className={linkItem.icon}></i> :
                  <img src={linkItem.img} alt="" />
              }
            </a>))
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;
