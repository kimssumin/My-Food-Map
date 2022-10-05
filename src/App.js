import Header from './component/Header';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CategoryList from './component/CategoryList';
import Category from './component/Category';
import EmptyPage from './component/EmptyPage';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes> 
          <Route exact path = "/" element = {<CategoryList/>}>
          </Route>
          <Route path = "/category/:category" element = {<Category/>}>
          </Route>


          <Route path = "*" element = {<EmptyPage />}> 
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  );   
}

export default App;
