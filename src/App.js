import { Placeholder } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/pages/Footer/Footer';
import Header from './components/pages/Header/Header';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import NotFound from './components/pages/NotFound/NotFound';
import PrivateRoute from './components/pages/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/order-review">
            <Placeholder />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
