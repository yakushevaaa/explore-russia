import './MainButton.scss';

const MainButton = ({text}: {text:string}) => {
  return (
    <button className="main-button">
        {text}
    </button>
  );
};

export default MainButton;