// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MMHeader from './layouts/Header';
import MMFooter from './layouts/Footer';
import MainRouters from './routers/mainRouter';
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
        <MainRouters></MainRouters>
      </div>
      <div className='contentWrapper'>
        <MMFooter/>
      </div>
    </div>
    </>
  )
}

export default App
