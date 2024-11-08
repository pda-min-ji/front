import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MMHeader from './layouts/Header';

import MMFooter from './layouts/Footer';
import MainRouters from './routers/mainRouter';
<<<<<<< HEAD
// import { BrowserRouter } from 'react-router-dom';
// import QuestionComponent from './components/QuestionComponent';
=======

>>>>>>> f6d761e72ad4dea9ac8f331837528e845ff6c6da

function App() {

  return (
    <>
    <div className='wrapper'>
      <div className='contentWrapper' style={{marginBottom:"20px"}}>
          <MMHeader/>
      </div>
<<<<<<< HEAD
      {/* <div className='contentWrapper'> */}
      <div className="container">
        <MainRouters></MainRouters>
=======
      <div className="container contentWrapper">
        <MainRouters/>
>>>>>>> f6d761e72ad4dea9ac8f331837528e845ff6c6da
      </div>
    </div>
      <div className='contentWrapper'>
        <MMFooter/>
      </div>
    </>
  )
}

export default App
