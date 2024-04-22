import './App.css';
import Header from './components/common/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/home';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
