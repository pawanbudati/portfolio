import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineCode, AiOutlineMessage, AiOutlineRadiusSetting, AiOutlineUnorderedList } from 'react-icons/ai';

const navbarConfig = [
    { id:0, icon: AiOutlineHome, route: "#", title: "Home", tooltip:"Home" },
    { id:2, icon: AiOutlineUser, route: "#about", title: "About", tooltip:"About" },
    { id:3, icon: AiOutlineBook, route: "#experience", title: "Experience", tooltip:"Experience" },
    { id:6, icon: AiOutlineUnorderedList, route: "#skills", title: "Skills", tooltip:"Skills" },
    { id:4, icon: AiOutlineCode, route: "#projects", title: "Projects", tooltip:"Projects" },
    { id:7, icon: AiOutlineMessage, route: "#education", title: "Education", tooltip:"Education" },
    { id:5, icon: AiOutlineCode, route: "#contact", title: "Contact", tooltip:"Contact" },
]


export {navbarConfig}