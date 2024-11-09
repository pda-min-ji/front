import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MMHeader from './layouts/Header';
import MMFooter from './layouts/Footer';
import MainRouters from './routers/mainRouter';
import { UserProvider } from './contexts/userContext';

function App() {

  return (
    <>
    <UserProvider>
      <div className='root'>
        <MMHeader />
        <div id='container'>
          <MainRouters />
        </div>
        <MMFooter />
      </div>
      </UserProvider>
    </>
  )
}

export default App
