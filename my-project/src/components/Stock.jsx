import React, { useState } from 'react';
import './Stock.css';

const products = [
  { id: 1,
     image: 'https://n.nordstrommedia.com/it/1f005099-2908-4c91-89e2-5904537fb4d8.jpeg?q=45&dpr=2&h=365.31&w=230',
    description: 'Arrives before Christmas',
     paragraph: 'Mandewell',
      rating: 4.5, 
      price: '15.97',
       originalPrice: '28.00',
        discount: '(42% off)' },
  { id: 2,
     image: 'https://n.nordstrommedia.com/it/1487d537-dfee-4dac-b122-cd96c85e4c17.jpeg?q=45&dpr=2&h=365.31&w=230',
  description: 'Arrives before Christmas', 
  paragraph: 'Jean Paul Gaultier', 
  rating: 4.5,
   price: '39.97',
    originalPrice: '60.00', 
    discount: '(33% off)' },
  { id: 3,
     image: 'https://n.nordstrommedia.com/it/e6015671-8485-4b15-8536-315afaae8934.jpeg?q=45&dpr=2&h=365.31&w=230',
       description: 'Arrives before Christmas',
        paragraph: 'Free People',
         rating: 5, 
         price: '24.97',
          originalPrice: '78.00',
           discount: '(67% off)' },
  { id: 4,
     image: 'https://n.nordstrommedia.com/it/3e1967b3-a07b-4d10-89a3-3f49ea2a693b.jpeg?q=45&dpr=2&h=365.31&w=230',
       description: 'Arrives before Christmas',
        paragraph: 'Kate Spade New York',
         rating: 4.5,
          price: '19.97',
           originalPrice: '30.00',
            discount: '(48% off)' },
  { id: 5,
     image: 'https://n.nordstrommedia.com/it/be8f0be2-8bef-4241-aa55-a3da7eed601a.jpeg?q=45&dpr=2&h=365.31&w=230',
       description: 'Arrives before Christmas',
        paragraph: 'Leith', rating: 4.5,
         price: '15.97',
          originalPrice: '38.00',
           discount: '(57% off)' },
  { id: 6,
     image: 'https://n.nordstrommedia.com/it/4515e746-31ba-4c5f-9be2-127461f31024.jpeg?q=45&dpr=2&h=365.31&w=230',
       description: 'Arrives before Christmas',
        paragraph: 'Original Penguin',
         rating: 4,
          price: '14.97', 
          originalPrice: '32.00',
           discount: '(53% off)' },
  { id: 7,
     image: 'https://n.nordstrommedia.com/it/4cc34ec8-8462-4929-af03-0dced14a2738.jpeg?q=45&dpr=2&h=365.31&w=230',
      description: 'Arrives before Christmas',
       paragraph: 'Adornia',
        rating: 4, 
        price: '32.97',
         originalPrice: '175.00',
          discount: '(81% off)' },
  { id: 8,
     image: 'https://n.nordstrommedia.com/it/4002e5e1-c821-47f5-8ee5-2fb06d26ec05.jpeg?q=45&dpr=2&h=365.31&w=230',
      description: 'Arrives before Christmas', 
      paragraph: 'Nike',
       rating: 4.5, 
       price: '16.97', 
       originalPrice: '18.00', 
       discount: '(5% off)' },
  { id: 9, 
    image: 'https://n.nordstrommedia.com/it/7d870315-c4f4-4c3e-97ac-68869f9b783b.jpeg?q=45&dpr=2&h=365.31&w=230',
     description: 'Arrives before Christmas',
      paragraph: 'NEST NEW York', 
      rating: 4.2,
       price: '34.97', 
       originalPrice: '60.00',
        discount: '(41% off)' },
  { id: 10,
     image: 'https://n.nordstrommedia.com/it/320fc169-4789-441c-971f-c0c7c0318a06.jpeg?q=45&dpr=2&h=365.31&w=230',
      description: 'Arrives before Christmas',
       paragraph: 'Nike',
        rating: 4.3, 
        price: '21.97', 
        originalPrice: '24.00',
         discount: '(8% off)' },
  { id: 11, 
    image: 'https://n.nordstrommedia.com/it/f6198752-43a6-45a8-a93a-08b41ce0ed5a.jpeg?q=45&dpr=2&h=365.31&w=230', 
     description: 'Arrives before Christmas',
      paragraph: 'NORDSTROM RACK',
       rating: 4.1,
        price: '9.97',
         originalPrice: '39.50',
          discount: '(74% off)' },
  { id: 12, 
    image: 'https://n.nordstrommedia.com/it/a86bd086-3847-4d72-8b5b-2cd6780bbd7c.jpeg?q=45&dpr=2&h=365.31&w=230',
      description: 'Arrives before Christmas',
       paragraph: 'Calvin Klein', rating: 4,
        price: '19.97',
         originalPrice: '42.50',
          discount: '(53% off)' }
];

const ProductSlider = () => {
    const [startIndex, setStartIndex] = useState(0);
  
    const handleNext = () => {
      setStartIndex((prevIndex) => (prevIndex + 4) % products.length);
    };
  
    const handlePrev = () => {
      setStartIndex((prevIndex) => (prevIndex - 4 + products.length) % products.length);
    };
  
    const isAtStart = startIndex === 0;
    const isAtEnd = startIndex + 4 >= products.length;
  
    return (
      <div className="slider-container">
        <button onClick={handlePrev} className="slider-button" disabled={isAtStart}> &lt; </button>
        <div className="product-container">
          {products.slice(startIndex, startIndex + 4).map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.description} className="product-image" />
              <p className="product-description" >{product.description}</p>
              <p>{product.paragraph}</p>
              
              <div className="price">
                <span className="current-price">{product.price}</span>
                <span className="original-price">{product.originalPrice}</span>
              </div>
              <p className="discount">{product.discount}</p>
              <div className="rating">
                {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="slider-button" disabled={isAtEnd}> &gt; </button>
      </div>
    );
};

export default ProductSlider;
