import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Navbar: React.FC = () => { 
  return ( 
    <nav className="bg-white shadow-md"> 
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center"> 
        <h1 className="text-2xl font-bold">Pluimmers</h1> 
        <div className="space-x-4"> 
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link> 
          <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link> 
          <Link to="/services" className="text-gray-700 hover:text-blue-500">Services</Link> 
          <Link to="/gallery" className="text-gray-700 hover:text-blue-500">Gallery</Link> 
          <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link> 
        </div> 
      </div> 
    </nav> 
  ); 
}; 

export default Navbar;