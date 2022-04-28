import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    //<Home />
    <Router>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms/new' element={<NewRoom />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
