import "./index.css";
import "./adaptive.css";
import { useState, useEffect } from 'react';
import Secret1 from "../../../../assets/image/img/secrets1.jpg";
import Secret2 from "../../../../assets/image/img/secrets2.jpg";
import Secret3 from "../../../../assets/image/img/secrets3.jpg";
import Secret4 from "../../../../assets/image/img/secrets4.jpg";
import Secret5 from "../../../../assets/image/img/secrets5.jpg";
import Next from "../../../../assets/image/icon/next.svg";
import Prev from "../../../../assets/image/icon/previous.svg";

export default function SecretsSection() {
    const images = [
        {src: Secret1, alt: "Moscow", title: "Москва-Сити"},
        {src: Secret2, alt: "Cathedral", title: "Исаакиевский собор"},
        {src: Secret3, alt: "Everest", title: "Эверест"},
        {src: Secret4, alt: "Altai", title: "Алтайские горы"},
        {src: Secret5, alt: "Kremlin", title: "Московский Кремль"}
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const getVisibleImages = () => {
        if (isMobile) {
            return [images[currentIndex]];
        }

        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(images[(currentIndex + i) % images.length]);
        }
        return visible;
    };

    return (
        <section className="secrets-section">
            <div className="container">
                <h2 className="section-title">Раскройте наши секреты</h2>
                <div className="slider-container">
                    <img className="nav-button prev" src={Prev} alt="prev" onClick={handlePrev}/>
                    <div className="slides-wrapper">
                        <div className={`${isMobile ? 'mobile-slide' : 'desktop-slide'}`}>
                            {getVisibleImages().map((img, index) => (
                                <div key={`${img.alt}-${index}`} className="image-container">
                                    <img src={img.src} alt={img.alt} className="secret-image" />
                                    <div className="image-caption">
                                        {img.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img src={Next} alt="next" className="nav-button next" onClick={handleNext} />
                </div>

                <div className="dots-container">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Перейти к слайду ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}