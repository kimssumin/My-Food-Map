import Header from './component/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CategoryList from './component/CategoryList';
import Category from './component/Category';
import EmptyPage from './component/EmptyPage';
import CreateFood from './component/CreateFood';
import CreateCategory from './component/CreateCategory';
import Visit from './component/Visit';

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
          <Route path = "/create_food" element = {<CreateFood/>}>
          </Route>
          <Route path = "/create_category" element = {<CreateCategory/>}>
          </Route>
          <Route path = "/visit" element = {<Visit/>}>
          </Route>
          <Route path = "*" element = {<EmptyPage />}> 
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  );   
}

export default App;
