import { useState } from 'react';
import '../styles/DropdownAdopta.css'
import { Link } from 'react-router-dom';
import Nav_Button from './Nav_Button';

const DropdownAdopta = ({button}) => {
   
      const [isOpen, setIsOpen] = useState(false);
    
      const handleMouseEnter = () => {
        setIsOpen(true);
      };
    
      const handleMouseLeave = () => {
        setIsOpen(false);
      };
    
      return (
        <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button>{button}</button>
          {isOpen && (
            <div className="dropdown-content">
              <Nav_Button link={<Link to="/adopta/perros">Perros</Link>}/>
              <Nav_Button link={<Link to="/adopta/gatos">Gatos</Link>}/> 
            </div>
          )}
        </div>
      );
    }
    

export default DropdownAdopta