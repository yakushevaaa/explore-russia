import "./index.scss";
import "./adaptive.scss";
export const Features = () => {
  return (
    <div className="features">
      <h2 className="features__title">Россия: удивительное рядом</h2>
      <p className="features__text">
        Это страна невероятных масштабов и уникальных возможностей для туризма.{" "}
        <br />
        Вот несколько фактов, которые помогут вам лучше понять её богатство!
      </p>
      <ul className="features__list">
        <li className="features__item">
          <h3 className="features__title--accent">
            Культурная <br /> мозаика
          </h3>
          <p className="features__text">
            От древнерусских храмов Золотого кольца до авангардных шедевров
            Петербурга — в России переплелись традиции сотен народов. Посетите
            этнические фестивали в Казани или музеи деревянного зодчества в
            Кижах.
          </p>
        </li>
        <li className="features__item">
          <h3 className="features__title--accent">
            Гастрономическое <br /> путешествие
          </h3>
          <p className="features__text">
            От сибирских пельменей с медвежатиной до кавказского хачапури. В
            каждом регионе — свои кулинарные традиции.
          </p>
        </li>
        <li className="features__item">
          <h3 className="features__title--accent">
            Природные <br />
            чудеса
          </h3>
          <p className="features__text">
            Почувствуйте мощь вулканов Камчатки, прозрачность байкальского льда
            и бескрайние степи Калмыкии. Уникальные заповедники занимают 11%
            территории страны — больше, чем вся площадь Германии!
          </p>
        </li>
      </ul>
    </div>
  );
};
