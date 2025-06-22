import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import ValidatedForm from "@/components/Form/ValidatedForm";
import TravelExperienceDisplay from "../TravelExperienceDisplay";
import "./style.css";

function ComponentYouSelected() {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="trip-planner-container">
                <div className="trip-planning-guide">
                    <p className="main-heading-text-style">Как добраться и спланировать поездку?</p>
                    <TravelExperienceDisplay />
                    <button className="book-tour-button" onClick={() => setModalOpen(true)}>
                        Забронировать тур
                    </button>
                </div>
            </div>

            <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2>Форма бронирования</h2>
                <ValidatedForm />
            </Modal>
        </>
    );
}

export default ComponentYouSelected;
