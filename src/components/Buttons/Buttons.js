import { Link } from 'react-router-dom';
import "./Buttons.css";

function Buttons({ to, buttonColor, buttonText }) {

    return (
        <Link to={to}>
            <button className={`button ${buttonColor}`} >
                {buttonText}
            </button>
        </Link>
    )
}

export default Buttons;