// import React from "react";
// import { FilterDropdownProps } from "@/@types/interface/Interface";

// const FilterDropdown: React.FC<FilterDropdownProps> = ({
// 	title,
// 	options,
// }: FilterDropdownProps) => {
// 	const [isOpen, setIsOpen] = React.useState(false);
// 	return (
// 		<main>
// 			<div>
// 				<div className='relative inline-block text-left'>
// 					<button
// 						className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none'
// 						onClick={() => setIsOpen(!isOpen)}
// 					>
// 						{title}
// 						<svg
// 							className='-mr-1 ml-2 h-5 w-5'
// 							xmlns='http://www.w3.org/2000/svg'
// 							fill='none'
// 							viewBox='0 0 24 24'
// 							stroke='currentColor'
// 						>
// 							<path
// 								strokeLinecap='round'
// 								strokeLinejoin='round'
// 								strokeWidth={2}
// 								d='M19 9l-7 7-7-7'
// 							/>
// 						</svg>
// 					</button>
// 					{isOpen && (
// 						<div className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
// 							<div className='py-1'>
// 								{options.map((option) => (
// 									<a
// 										key={option}
// 										href='#'
// 										className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
// 									>
// 										{option}
// 									</a>
// 								))}
// 							</div>
// 						</div>
// 					)}
// 				</div>
// 			</div>
// 		</main>
// 	);
// };

import React, { useCallback, useState } from "react";
import { FilterDropdownProps } from "@/@types/interface/Interface";

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  title,
  options,
}: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <main>
      <div>
        <div className="relative inline-block text-left">
          <button
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            onClick={handleToggle}
          >
            {title}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {options.map((option) => (
                  <a
                    key={option}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {option}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default FilterDropdown;
