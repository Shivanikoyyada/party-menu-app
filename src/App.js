import logo from './logo.svg';
import './App.css';

import{BrowserRouter,Router,Routes,Route} from 'react-router-dom'
import Menupage from './Pages/Menupage';
import IngredientPage from './Pages/IngredientPage';

function App() {
  return (
    <BrowserRouter>
    {/* <Router> */}
      <Routes>
        <Route path='/' element={<Menupage/>}/>
        <Route path='/ingredient/:id' element={<IngredientPage/>}/>
      </Routes>

    {/* </Router> */}
    </BrowserRouter>
  );
}

export default App;
