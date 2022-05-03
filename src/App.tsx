import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext'
import { Room } from './pages/Room';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms/new' element={<NewRoom />} />
          <Route path='/rooms/:id' element={<Room />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;