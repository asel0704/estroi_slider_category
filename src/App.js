import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import {HomePage} from "./pages/HomePage";
import {Header} from "./components/Header";
import CategoryMenu from './components/CategoryMenu';
import { ChildPageCategories } from './components/ChildPageCategories';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
       <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path = "/category/" element={<CategoryMenu />} />
          <Route path='/child' element={<ChildPageCategories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
