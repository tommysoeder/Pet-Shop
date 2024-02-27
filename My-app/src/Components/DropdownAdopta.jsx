import { useState } from 'react';
import '../Styles/DropdownAdopta.css'
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
              <a href="#">Perros</a>
              <a href="#">Gatos</a> 
            </div>
          )}
        </div>
      );
    }
    

export default DropdownAdopta