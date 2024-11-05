// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import MMHeader from './layouts/Header';
import ProblemComponent from './components/ProblemComponent';
import MMFooter from './layouts/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <MMHeader/>
      <ProblemComponent />
      <Button type="button" value="Input">hi</Button>
      <MMFooter/>
    </>
  )
}

export default App
