import { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import ValidatedForm from '@/components/Form/ValidatedForm';
import './TravelCard.scss';

type TravelCardProps = {
    number: string;
    title: string;
    description: string;
};

const TravelCard = ({ number, title, description }: TravelCardProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="travel-card" onClick={() => setModalOpen(true)}>
        <span className="travel-card__number">{number}</span>
        <h3 className="travel-card__title">{title}</h3>
        <p className="travel-card__description">{description}</p>
        <button 
          className="travel-card__button"
        >
          Подробнее
        </button>
      </div>

      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>Забронировать тур: {title}</h2>
        <ValidatedForm />
      </Modal>
    </>
  );
};

export default TravelCard;