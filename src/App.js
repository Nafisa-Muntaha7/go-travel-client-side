import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/pages/Footer/Footer';
import Header from './components/pages/Header/Header';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
