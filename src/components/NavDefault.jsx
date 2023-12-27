import { useNavigate } from 'react-router-dom';
import '../style/nav.css';
import Logotype from '../assets/Logo.svg';

function NavDefault(props) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(props.navigateTo);
    }

    return (
        <header>
            <div className="container">
                <a href="#"><img src={Logotype} alt="Malta logo"/></a>
                <div className="right-col">
                    <p>{props.text}</p>
                    <button className="primary" onClick={handleButtonClick}>{props.btn}</button>
                </div>
            </div>
        </header>
    )
}

export default NavDefault;
