// src/routers/TestRouters.jsx
import { Route, Routes } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';
import SignupComponent from '../components/SignUpComponent';
import QuestionComponent from '../components/QuestionComponent'
import TestComponent from '../components/TestComponent';
import RankingComponent from '../components/RankingComponent';
import UserProfile from '../components/UserProfileComponent';

const MainRouters = () => {
    return (
            <Routes>
                <Route path="users/login" element={<LoginComponent />} />
                <Route path="users/signup" element={<SignupComponent />} /> {/* Signup 라우트 추가 */}
                <Route path='/users/test' element={<TestComponent/>}/> {/* API request Test*/}
                <Route path="/" element={<QuestionComponent/>}/>
                <Route path="/ranking" element={<RankingComponent />} />
                <Route path="/profile/:userId" element={<UserProfile />}/>
                <Route path='/profile' element={<UserProfile />} />
            </Routes>
    );
};

export default MainRouters;
