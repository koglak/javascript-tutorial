import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* other routes */}
        <Route path="/" element={<Navigation />} />
      </Routes>
    </Router>
  );
};

export default App;
