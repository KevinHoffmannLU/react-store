import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
