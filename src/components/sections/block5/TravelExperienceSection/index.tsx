import FlightBookingSection from "../FlightBookingSection/index.js";
import RussianAccommodationInfo from "../RussianAccommodationInfo/index.js";
import Moto from "../../../../assets/image/img/moto.jpg"
import "./style.css";

function TravelExperienceSection() {
    return (
        <div className="flight-info-container">
            <FlightBookingSection />
            <RussianAccommodationInfo />
            <div className="journey-info-container">
                <img src={Moto} className="travel-image-card-content"  alt="run"/>
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