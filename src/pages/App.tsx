import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';

export const App: React.FC = () => {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  );
};


