// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import MMHeader from './layouts/Header';
import ProblemComponent from './components/QuestionComponent';
import MMFooter from './layouts/Footer';
import { BrowserRouter } from 'react-router-dom';
import QuestionComponent from './components/QuestionComponent';

function App() {

  return (
    <>
      <MMHeader/>
      <QuestionComponent/>
      <MMFooter/>
    </>
  )
}

export default App
