import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/home';
import { CreateRecipe } from './pages/create-recipe';
import { Auth } from './pages/auth';
import { SavedRecipes } from './pages/saved-recipe';
import { Navbar } from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/create-recipe' element={<CreateRecipe />} />
          <Route path='/saved-recipes' element={<SavedRecipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
