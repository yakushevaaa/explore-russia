import "./style.css"
function FlightBookingSection() {
    return (
        <div className="flight-info-container">
            <div className="section-with-number">
                <div className="number-circle">1</div>
                <div>
                    <p className="flight-heading">Бронируйте авиабилеты</p>
                    <p className="flight-info-text-style">
                        Россия — огромная страна, и авиасообщение между городами хорошо развито. Выбирайте прямые рейсы в Москву, Санкт-Петербург или Владивосток, в зависимости от вашего маршрута. Советуем
                        бронировать билеты заранее, особенно в высокий сезон.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FlightBookingSection;