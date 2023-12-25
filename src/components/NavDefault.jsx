import '../style/nav.css';
import Logotype from '../assets/Logo.svg';

function NavDefault() {
    return (
        <header>
            <div className="container">
                <a href="#"><img src={Logotype} alt="Malta logo"/></a>
                <div className="right-col">
                    <p>Don't have an account?</p>
                    <button className="primary">Sign up</button>
                </div>
            </div>
        </header>
    )
}

export default NavDefault
