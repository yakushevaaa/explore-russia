import './TravelCard.scss';

type TravelCardProps = {
    number: string;
    title: string;
    description: string;
};

const TravelCard = ({ number, title, description }: TravelCardProps) => {
  return (
    <div className="travel-card">
      <span className="travel-card__number">{number}</span>
      <h3 className="travel-card__title">{title}</h3>
      <p className="travel-card__description">{description}</p>
    </div>
  );
};

export default TravelCard;