import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MMHeader from './layouts/Header';
import ProblemComponent from './components/QuestionComponent';
import MMFooter from './layouts/Footer';
import { BrowserRouter } from 'react-router-dom';
import QuestionComponent from './components/QuestionComponent';

function App() {

  return (
    <>
    <div className='wrapper'>
      <div className='contentWrapper' style={{marginBottom:"20px"}}>
          <MMHeader/>
      </div>
      {/* <div className='contentWrapper'> */}
      <div className="container">
        <QuestionComponent />
      </div>
      <div className='contentWrapper'>
        <MMFooter/>
      </div>
    </div>
    </>
  )
}

export default App
