import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/style.css';
import SignIn from './components/SignIn.jsx';
import Signup from './components/Signup/Signup.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default App;
