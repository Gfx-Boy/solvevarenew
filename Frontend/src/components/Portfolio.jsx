import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const portfolioItems = [
  { id: 1, category: 'Logo Design', image: 'https://i.ibb.co/py7GJgS/logo2.png', title: 'Sunnyspot' },
  { id: 2, category: 'Logo Design', image: 'https://i.ibb.co/k1D215M/logo1.png', title: 'Infino' },
  { id: 3, category: 'Logo Design', image: 'https://i.ibb.co/1RG3jkY/logo3.png', title: 'Beautyst' },
  { id: 4, category: 'Logo Design', image: 'https://i.ibb.co/SRFvJDD/logo4.png', title: 'Zovas' },
  { id: 5, category: 'Logo Design', image: 'https://i.ibb.co/sqnznCy/logo5.png', title: 'Backstone' },
  { id: 6, category: 'Web Design', image: 'https://i.ibb.co/ZM6LRpz/portfolio1.png', title: 'Get Shade' },
  { id: 7, category: 'Web Design', image: 'https://i.ibb.co/t3mBt7N/portfolio2.png', title: 'Celeste Home' },
  { id: 8, category: 'Web Design', image: 'https://i.ibb.co/d6655VV/portfolio3.png', title: 'Crushr' },
  { id: 9, category: 'Web Design', image: 'https://i.ibb.co/4p534Hb/portfolio4.png', title: 'Kemo Sabe' },
  { id: 10, category: 'Shopify', image: 'https://i.ibb.co/NrPL81V/barcodegarments-pk-1.png', title: 'Barcode Garments' },
  { id: 11, category: 'Shopify', image: 'https://i.ibb.co/cw1K65G/www-jungalow-com-1.png', title: 'Jungalow' },
  { id: 12, category: 'Shopify', image: 'https://i.ibb.co/MhQR2bC/www-luluandgeorgia-com-1.png', title: 'Lulu and Georgia' },
  { id: 13, category: 'Shopify', image: 'https://i.ibb.co/m8sJc19/lamaretail-com-gad-source-1-gclid-Cjw-KCAjw5-Ky1-Bh-Ag-Eiw-A5j-Gujlj-ZUi-Kx-Qhsy3-Bus-V161y-NNUJn-Pq.png', title: 'Lama Retail' },
  // Add more items as needed
];

const categories = ['All Works', 'Logo Design', 'Web Design', 'Shopify'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Works');

  const filteredItems = selectedCategory === 'All Works'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-10">
        <h2 className="text-gray-500 text-3xl font-bold mb-4">Our Portfolio</h2>
        <p className="text-gray-500">
          Witness the impact of our work, from stunning website designs to data-driven AI solutions. Our portfolio showcases the results of our dedication and expertise. It's not just about what we do but how we do it.
        </p>
      </div>
      <div className="flex justify-center mb-10">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full mx-2 ${selectedCategory === category ? 'bg-blue-500 text-white' : 'hover:bg-gray-400 backdrop-filter backdrop-blur-xl bg-opacity-50 border border-gray-700 bg-gray-800 text-gray-700'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            data-aos="fade-left"
            data-aos-delay={index * 100} // Staggered delay
            className="backdrop-filter backdrop-blur-xl bg-opacity-50 border border-gray-700 bg-black shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative overflow-hidden w-full h-56">
              <img
                src={item.image}
                alt={item.title}
                className={`absolute top-0 left-0 w-full object-cover transition-transform duration-[5000ms] ease-in-out ${
                  item.category === 'Web Design' || item.category === 'Shopify' ? 'hover:transform hover:translate-y-[-80%]' : ''
                }`}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl text-gray-100 font-semibold">{item.title}</h3>
              <p className="text-gray-500">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
