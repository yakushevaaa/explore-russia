import FlightBookingSection from "../FlightBookingSection";
import RussianAccommodationInfo from "../RussianAccommodationInfo";
import "./style.css";

function TravelExperienceSection() {
    return (
        <div className="flight-info-container">
            <FlightBookingSection />
            <RussianAccommodationInfo />
            <div className="journey-info-container">
                <img src="/assets/image_1694f9e3.png" className="travel-image-card-content" />
                <div className="journey-description-container">
                    <p className="flight-heading">Передвижение по стране</p>
                    <p className="adventure-text-style">
                        Россия предлагает разные способы путешествий: скоростные поезда «Сапсан», междугородние автобусы и внутренние авиарейсы. Для настоящих приключений арендуйте автомобиль и отправляйтесь по
                        живописным трассам.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TravelExperienceSection;