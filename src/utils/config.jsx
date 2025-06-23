import { AiOutlineHome, AiOutlineUser, AiOutlineOpenAI, AiOutlineProject, AiOutlineRead, AiOutlineSwitcher, AiOutlinePhone } from 'react-icons/ai';

const navbarConfig = [
    { id:1, icon: AiOutlineHome, route: "#", title: "Home", tooltip:"Home" },
    { id:2, icon: AiOutlineUser, route: "#about", title: "About", tooltip:"About" },
    { id:3, icon: AiOutlineSwitcher, route: "#experience", title: "Experience", tooltip:"Experience" },
    { id:6, icon: AiOutlineOpenAI, route: "#skills", title: "Skills", tooltip:"Skills" },
    { id:4, icon: AiOutlineProject, route: "#projects", title: "Projects", tooltip:"Projects" },
    { id:7, icon: AiOutlineRead, route: "#education", title: "Education", tooltip:"Education" },
    { id:5, icon: AiOutlinePhone, route: "#contact", title: "Contact", tooltip:"Contact" },
]


export {navbarConfig}