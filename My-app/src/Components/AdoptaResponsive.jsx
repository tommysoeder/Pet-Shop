import { useState } from 'react';
import '../styles/DropdownAdopta.css'
import { Link } from 'react-router-dom';
import Nav_Button from './Nav_Button';
import '../styles/AdoptaResponsive.css'

const AdoptaResponsive = ({button}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
        onClick(); 
      };

    return (
        <div className="dropdown-mobile">
            <button onClick={handleClick}>
                {button}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {isOpen ? (
                        <path d="M14.8285 11.9481L16.2427 10.5339L12 6.29122L7.7574 10.5339L9.17161 11.9481L11 10.1196V17.6568H13V10.1196L14.8285 11.9481Z" fill="currentColor" />
                    ) : (
                        <path d="M14.8285 12.0259L16.2427 13.4402L12 17.6828L7.7574 13.4402L9.17161 12.0259L11 13.8544V6.31724H13V13.8544L14.8285 12.0259Z" fill="currentColor" />
                    )}
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.7782 4.22183C15.4824 -0.0739415 8.51759 -0.0739422 4.22183 4.22183C-0.0739415 8.51759 -0.0739422 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183ZM18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604Z" fill="currentColor" />
                </svg>
            </button>
            {isOpen && (
                <div className="dropdown-mobile-content">
                    <Nav_Button link={<Link to="/adopta/perros" onClick={closeDropdown}>Perros</Link>} />
                    <Nav_Button link={<Link to="/adopta/gatos"onClick={closeDropdown}>Gatos</Link>} />
                </div>
            )}
        </div>
    );
}

export default AdoptaResponsive;
