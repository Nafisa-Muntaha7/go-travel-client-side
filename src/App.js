import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddPlace from './components/pages/AddPlace/AddPlace';
import Booked from './components/pages/Booked/Booked';
import Footer from './components/pages/Footer/Footer';
import Header from './components/pages/Header/Header';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import ManageBooking from './components/pages/ManageBooking/ManageBooking';
import NotFound from './components/pages/NotFound/NotFound';
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/pages/PrivateRoute/PrivateRoute';
import Register from './components/pages/Register/Register';
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
          <PrivateRoute path="/booking-review">
            <PlaceOrder />
          </PrivateRoute>
          <PrivateRoute path="/place-order">
            <Booked />
          </PrivateRoute>
          <PrivateRoute path="/manage-booking">
            <ManageBooking />
          </PrivateRoute>
          <PrivateRoute path="/add-place">
            <AddPlace />
          </PrivateRoute>
          <Route path="/register">
            <Register />
          </Route>
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
