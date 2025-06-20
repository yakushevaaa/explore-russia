import React from 'react';
import TravelCard from '@/components/sections/block1/TravelCard';
import MainButton from '@/components/sections/block1/MainButton';
import './ExploreRussiaSection.scss';

const ExploreRussiaSection = () => {
  const cardsData = [
    {
      number: '01',
      title: 'Исторические города',
      description: 'Погрузитесь в атмосферу древних городов. Узнайте тайны русских крепостей и старинных улочек.'
    },
    {
      number: '02',
      title: 'Природные богатства',
      description: 'Откройте для себя Байкал, Камчатку и Алтай. Горы, вулканы, чистейшие озера.'
    },
    {
      number: '03',
      title: 'Современные мегаполисы',
      description: 'Москва, Санкт-Петербург, Казань — динамичные города, где история встречается с современностью.'
    }
  ];

  return (
    <section className="explore-russia">
      <div className="explore-russia__container">
        <h1 className="explore-russia__title">ИССЛЕДУЙТЕ РОССИЮ</h1>
        
        <div className="explore-russia__button-wrapper">
          <MainButton>Начать путешествие</MainButton>
        </div>
        
        <div className="explore-russia__cards">
          {cardsData.map((card, index) => (
            <TravelCard 
              key={index}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreRussiaSection;