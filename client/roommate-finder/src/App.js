import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import CreateAccount from './createAccount';
import SignIn from './signIn';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/createAccount" element={<CreateAccount />} />
                <Route path="/signIn" element={<SignIn />} />
            </Routes>
        </Router>
    );
}

export default App;
