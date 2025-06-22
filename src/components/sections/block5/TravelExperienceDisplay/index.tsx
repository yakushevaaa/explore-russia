import TravelExperienceSection from "../TravelExperienceSection";
import PlanExperiences from "../PlanExperiences/index.js";
import "./style.css";
import MainButton from "@/components/sections/block1/MainButton";

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
                <MainButton text="Узнать больше"/>
            </div>
        </div>
    );
}

export default TravelExperienceDisplay;