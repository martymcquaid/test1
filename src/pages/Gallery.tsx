import React from 'react'; 

const Gallery: React.FC = () => { 
  return ( 
    <div className="p-12 bg-gray-100"> 
      <h2 className="text-4xl font-bold mb-4">Our Work</h2> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
        <div className="bg-gray-200 p-6 rounded shadow"> 
          <img src="portfolio-image1.jpg" alt="Portfolio Item 1" className="w-full h-48 object-cover rounded"/> 
        </div> 
        <div className="bg-gray-200 p-6 rounded shadow"> 
          <img src="portfolio-image2.jpg" alt="Portfolio Item 2" className="w-full h-48 object-cover rounded"/> 
        </div> 
        <div className="bg-gray-200 p-6 rounded shadow"> 
          <img src="portfolio-image3.jpg" alt="Portfolio Item 3" className="w-full h-48 object-cover rounded"/> 
        </div> 
      </div> 
    </div> 
  ); 
}; 

export default Gallery;