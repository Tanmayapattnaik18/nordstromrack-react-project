import React, { useState, useEffect } from "react";
import './Slideimage.css';

const images = [
    'https://n.nordstrommedia.com/it/7026dd4b-45f5-4935-822f-852a79c55d86.png?h=720&w=1608',
    'https://n.nordstrommedia.com/it/377e21eb-96c5-4812-8608-f10608479124.jpeg?h=720&w=1608',
    'https://n.nordstrommedia.com/it/c6b9e604-8220-4c25-8417-87a8a4667e67.jpeg?h=720&w=1608',
    
];

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider">
            <button className="prev" onClick={prevSlide}>❮</button>
            <div className="slider-images">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={index === currentIndex ? "active" : ""}
                    />
                ))}
            </div>
            <button className="next" onClick={nextSlide}>❯</button>
        </div>
    );
}

export default ImageSlider;

