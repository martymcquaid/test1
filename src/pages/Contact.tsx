import React from 'react'; 

const Contact: React.FC = () => { 
  return ( 
    <div className="p-12 bg-white"> 
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2> 
      <form className="flex flex-col space-y-4"> 
        <input type="text" placeholder="Your Name" className="p-2 border rounded" required /> 
        <input type="email" placeholder="Your Email" className="p-2 border rounded" required /> 
        <textarea placeholder="Your Message" className="p-2 border rounded" required></textarea> 
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Send Message</button> 
      </form> 
    </div> 
  ); 
}; 

export default Contact;