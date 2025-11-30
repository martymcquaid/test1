import React from 'react'; 

const Home: React.FC = () => { 
  return ( 
    <div className="bg-gray-100"> 
      <section className="hero bg-blue-200 h-screen flex flex-col justify-center items-center text-center"> 
        <h2 className="text-5xl font-bold">Pluimmers</h2> 
        <p className="mt-4 text-lg">Your partner in creating beautiful digital experiences.</p> 
      </section> 
      <section className="about p-12"> 
        <h3 className="text-3xl font-bold mb-4">About Us</h3> 
        <p>Pluimmers is dedicated to providing exceptional digital solutions, ensuring your vision comes to life with a touch of elegance.</p> 
      </section> 
      <section className="services p-12 bg-white"> 
        <h3 className="text-3xl font-bold mb-4">What We Do</h3> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
          <div className="service bg-gray-200 p-6 rounded shadow"> 
            <h4 className="font-semibold">Web Design</h4> 
            <p>Creating visually stunning and user-friendly websites.</p> 
          </div> 
          <div className="service bg-gray-200 p-6 rounded shadow"> 
            <h4 className="font-semibold">Branding</h4> 
            <p>Building a strong brand identity that resonates with your audience.</p> 
          </div> 
          <div className="service bg-gray-200 p-6 rounded shadow"> 
            <h4 className="font-semibold">SEO Services</h4> 
            <p>Optimizing your website for better search engine rankings.</p> 
          </div> 
        </div> 
      </section> 
      <section className="gallery p-12"> 
        <h3 className="text-3xl font-bold mb-4">Gallery</h3> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
          <div className="item bg-gray-200 p-6 rounded shadow"> 
            <img src="gallery-image1.jpg" alt="Gallery Item 1" className="w-full h-48 object-cover rounded"/> 
          </div> 
          <div className="item bg-gray-200 p-6 rounded shadow"> 
            <img src="gallery-image2.jpg" alt="Gallery Item 2" className="w-full h-48 object-cover rounded"/> 
          </div> 
          <div className="item bg-gray-200 p-6 rounded shadow"> 
            <img src="gallery-image3.jpg" alt="Gallery Item 3" className="w-full h-48 object-cover rounded"/> 
          </div> 
        </div> 
      </section> 
      <section className="contact p-12 bg-white"> 
        <h3 className="text-3xl font-bold mb-4">Contact Us</h3> 
        <form className="flex flex-col space-y-4"> 
          <input type="text" placeholder="Your Name" className="p-2 border rounded" required /> 
          <input type="email" placeholder="Your Email" className="p-2 border rounded" required /> 
          <textarea placeholder="Your Message" className="p-2 border rounded" required></textarea> 
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Send Message</button> 
        </form> 
      </section> 
    </div> 
  ); 
}; 

export default Home;