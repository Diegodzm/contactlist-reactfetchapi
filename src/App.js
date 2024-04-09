import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contactlist from './Views/Contactlist';
import Form from './Views/Form';
import injectContext from './store/Context';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Contactlist/>} ></Route>
          <Route path='/Form' element={<Form/>}></Route>
          
         </Routes>
      </BrowserRouter>
  
     
      
    </div>
  );
}

export default injectContext(App);
