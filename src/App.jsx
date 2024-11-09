// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MMHeader from './layouts/Header';
import MMFooter from './layouts/Footer';
import MainRouters from './routers/mainRouter';
import { UserProvider } from './contexts/userContext';
import QuestionComponent from './components/QuestionComponent';

function App() {

  return (
    <>
    <UserProvider>
    <div className='wrapper'>
      <div className='contentWrapper' style={{marginBottom:"20px"}}>
          <MMHeader/>
      </div>
      {/* <div className='contentWrapper'> */}
      <div className="container">
        <MainRouters></MainRouters>

        <QuestionComponent />

      </div>
      <div className='contentWrapper'>
        <MMFooter/>
      </div>
      </UserProvider>
    </>
  )
}

export default App
