import React from 'react'; 

const Services: React.FC = () => { 
  return ( 
    <div className="p-12 bg-white"> 
      <h2 className="text-4xl font-bold mb-4">Our Services</h2> 
      <p>At Pluimmers, we offer a range of services designed to elevate your online presence:</p> 
      <ul className="list-disc pl-5 space-y-2"> 
        <li>Web Design</li> 
        <li>Brand Development</li> 
        <li>SEO Optimization</li> 
        <li>Content Creation</li> 
        <li>Social Media Management</li> 
        <li>Consultation Services</li> 
      </ul> 
    </div> 
  ); 
}; 

export default Services;