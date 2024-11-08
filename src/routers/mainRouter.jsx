// src/routers/TestRouters.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';
import SignupComponent from '../components/SignUpComponent';
<<<<<<< HEAD
import QuestionComponent from '../components/QuestionComponent'
=======
// import ProblemComponent from '../components/ProblemComponent';
>>>>>>> f6d761e72ad4dea9ac8f331837528e845ff6c6da
import TestComponent from '../components/TestComponent';
import QuestionComponent from '../components/QuestionComponent';

const MainRouters = () => {
    return (
        <Router>
            <Routes>
                <Route path="users/login" element={<LoginComponent />} />
                <Route path="users/signup" element={<SignupComponent />} /> {/* Signup 라우트 추가 */}
<<<<<<< HEAD
=======
                <Route path="/" element={<QuestionComponent/>}/>
>>>>>>> f6d761e72ad4dea9ac8f331837528e845ff6c6da
                <Route path='/users/test' element={<TestComponent/>}/> {/* API request Test*/}
                <Route path='/'element={<QuestionComponent/>}/>
            </Routes>
        </Router>
    );
};

export default MainRouters;
