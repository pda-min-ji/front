import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import MMHeader from './layouts/Header';
import MMFooter from './layouts/Footer';
import MainRouters from './routers/mainRouter';
import { UserProvider } from './contexts/userContext';

function App() {

  return (
    <>
      <Router>
        <UserProvider>
          <div className="root">
            <MMHeader />
            <div id="container">
            {/* <MainRouters /> */}
              <Routes> {/* Routes는 Router 내부에 있어야 함 */}
                <Route path="/*" element={<MainRouters />} /> {/* MainRouters가 경로들을 담당 */}
              </Routes>
            </div>
            <MMFooter />
          </div>
        </UserProvider>
      </Router>
    </>
  )
}

export default App
