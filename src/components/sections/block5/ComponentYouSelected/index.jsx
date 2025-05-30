import TravelExperienceDisplay from "../TravelExperienceDisplay";
import "./style.css";

function ComponentYouSelected() {
    return (
        <div className="trip-planner-container">
            <div className="trip-planning-guide">
                <p className="main-heading-text-style">Как добраться и спланировать поездку?</p>
                <TravelExperienceDisplay />
            </div>
        </div>
    );
}

export default ComponentYouSelected;
