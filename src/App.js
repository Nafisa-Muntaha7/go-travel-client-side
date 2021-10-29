import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/pages/Footer/Footer';
import Header from './components/pages/Header/Header';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/home">
        <Home />
      </Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
