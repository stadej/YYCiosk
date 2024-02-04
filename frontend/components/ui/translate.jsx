// src/components/Select.js
import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {useLanguage} from '@/src/contexthooks/useLanguages';
const Select = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const languageProvider = useLanguage()

  const handleOptionClick = (option) => {
    setSelectedOption(option);
     languageProvider.setLanguage(option)
    setIsOpen(false);
    console.log(option)
    
  };
 
  return (
    <div className="relative inline-block text-left">
      <div>
      <img width={50} 
           height={50} 
           src="/translate.png" 
           alt="microphone"   
           onClick={() => setIsOpen(!isOpen)}
 />

      </div>

{/* Dropdown menu with scrolling */}
{isOpen && (
         <div
         className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
         role="menu"
         aria-orientation="vertical"
         aria-labelledby="options-menu"
         style={{ maxHeight: '40px', overflowY: 'auto' }}
       >
          <div className="py-1" role="none">
            {options.map((option) => (
              <button
                key={option}
                className={classNames(
                  'block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100',
                  {
                    'bg-gray-100': selectedOption === option,
                  }
                )}
                role="menuitem"
                onClick={() => handleOptionClick(option)}

              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
Select.propTypes = {
    options: PropTypes.array.isRequired,
  };
  
export default Select;
