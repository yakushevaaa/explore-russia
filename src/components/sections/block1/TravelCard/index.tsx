import Card from '@/components/Card/Card';
import './TravelCard.scss';

type TravelCardProps = {
    number: string;
    title: string;
    description: string;
};

const TravelCard = ({ number, title, description }: TravelCardProps) => {
  return (
    <Card>
      <div className="travel-card">
        <span className="travel-card__number">{number}</span>
        <h3 className="travel-card__title">{title}</h3>
        <p className="travel-card__description">{description}</p>
      </div>
    </Card>
  );
};

export default TravelCard;