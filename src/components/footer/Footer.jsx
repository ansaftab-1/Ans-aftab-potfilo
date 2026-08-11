import React from 'react'

const Footer = () => {
 return (
    <footer className="py-6 px-4 bg-black text-center border-t border-gray-700">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Muhammad Ans. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer