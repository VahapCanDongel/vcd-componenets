import React, { useState } from 'react';
import clsx from 'clsx';

export default function Dropdown({ trigger, children, className, dropwdownClassName, triggerClassName }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownMenuClasses = clsx(
    'absolute bg-white shadow-2xl rounded mt-2 py-2 w-[200px] min-h-[250px]',
    isOpen ? 'block' : 'hidden',
    dropwdownClassName
  );

  const triggerClasses = clsx('bg-gray-200', triggerClassName)

  return (
    <div className="relative inline-block">
      <div onClick={toggleDropdown} className={triggerClasses}>
        {trigger}
      </div>
      <div className={dropdownMenuClasses}>
        {children}
      </div>
    </div>
  );
}
