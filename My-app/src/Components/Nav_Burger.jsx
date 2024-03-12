import imagen from '../assets/menu-bar.png'
import { useState } from 'react';
import '../styles/Nav_Burger.css'
import Nav_Button from './Nav_Button';
import { Link } from 'react-router-dom';
import AdoptaResponsive from "./AdoptaResponsive"

const Nav_Burger = () => {
     
  const [isOpen, setIsOpen] = useState(false);
    
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='Nav_Burger'>
          <button onClick={handleClick}>
               <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="currentColor" /><path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" fill="currentColor" /><path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" fill="currentColor" /></svg>
          </button>
          {isOpen && (
            <div className="burger-content">
              <Nav_Button link={<Link to="/">Inicio</Link>}/>
              <div className='adopta'><AdoptaResponsive button="Adopta"/></div>
              <Nav_Button link={<Link to="/dona">Dona</Link>}/>
              <Nav_Button link={<Link to="/sobre-nosotros">Sobre Nosotros</Link>}/>
            </div>
          )}
        </div>
  )
}

export default Nav_Burger