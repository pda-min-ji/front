import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MMHeader from './layouts/Header';
import ProblemComponent from './components/ProblemComponent';
import MMFooter from './layouts/Footer';
// import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
    <div className='wrapper'>
      <div className='contentWrapper' style={{marginBottom:"20px"}}>
          <MMHeader/>
      </div>
      {/* <div className='contentWrapper'> */}
      <div className="container">
        <ProblemComponent />
      </div>
      <div className='contentWrapper'>
        <MMFooter/>
      </div>
    </div>
    </>
  )
}

export default App
