import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full text-center py-4">
      <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight leading-none">
        n<span className="text-blue-600">Todo</span>
      </h1>
      {/* Optional: dynamic task count */}
      {/* <p className="text-lg text-gray-600 mt-2">3 tasks remaining</p> */}
    </header>
  );
};

export default Header;
