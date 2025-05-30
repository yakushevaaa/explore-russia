import { Button } from "@mui/base";
import TravelExperienceSection from "../TravelExperienceSection";
import PlanExperiences from "../PlanExperiences";
import "./style.css";

function TravelExperienceDisplay() {
    return (
        <div className="trip-info-container">
            <div className="trip-details-container">
                <div className="trip-planner-section">
                    <TravelExperienceSection />
                    <PlanExperiences />
                </div>
            </div>
            <div className="content-wrapper">
                <Button className="primary-button">Узнать больше</Button>
            </div>
        </div>
    );
}

export default TravelExperienceDisplay;