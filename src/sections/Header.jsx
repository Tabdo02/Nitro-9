import { useState } from "react"
import { hamburgerMenuDesktop, hamburgerMenuDesktopG, hamburgerMenuMobile, hamburgerMenuMobileG } from "../assets"
import Navbar from "../components/Navbar";
import {disablePageScroll,enablePageScroll} from 'scroll-lock'
import { Link } from "react-router-dom";

const Header = ({className,txtColor=""}) => {
  const [isOpen, setIsOpen] = useState(false);
  const updateState = ()=>{
    if (isOpen) {
      setIsOpen(false);
      enablePageScroll();
    }else{
      setIsOpen(true);
      disablePageScroll();
    }
  }
  const closeNav = ()=>{
    setIsOpen(false);
    enablePageScroll();
  }
  return (
    <header className={`${className} top-0 left-0 right-0 p-px z-10`}>
        <div className="flex justify-between items-center my-3 md:my-2">
            <Link to='/'>
              <h3 className={`h3-small md:h2-small ${txtColor || ''}`}>Nitro</h3>
            </Link>
            <button className="md:hidden" onClick={updateState}>
              <img src={txtColor? hamburgerMenuMobileG : hamburgerMenuMobile} alt="hamburger menu mobile" className="object-contain" />
            </button>
            <button className="hidden md:block" onClick={updateState}>
             <img src={txtColor?hamburgerMenuDesktopG : hamburgerMenuDesktop} alt="hamburger menu desktop" className="object-contain " />
            </button>
        </div>
        {isOpen && <Navbar onClick={updateState} closeNav={closeNav}/>}
    </header>
  )
}

export default Header