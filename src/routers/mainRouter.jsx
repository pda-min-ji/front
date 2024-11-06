// src/routers/TestRouters.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';
import SignupComponent from '../components/SignUpComponent';
import ProblemComponent from '../components/ProblemComponent';

const MainRouters = () => {
    return (
        <Router>
            <Routes>
                <Route path="users/login" element={<LoginComponent />} />
                <Route path="users/signup" element={<SignupComponent />} /> {/* Signup 라우트 추가 */}
                <Route path="/" element={<ProblemComponent/>}/>
            </Routes>
        </Router>
    );
};

export default MainRouters;
