import './App.css';
import Navigation from './components/shared/Navigation'
import Footer from './components/shared/footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Profile from './components/pages/Profile'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import Listing from './components/pages/Listing'
import PrivateRoute from './components/shared/PrivateRoute'

//function App() {
const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/About" component={About} /> */}
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Login" component={Login} />
        <PrivateRoute path="/submissions">
          <Listing />
        </PrivateRoute>
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
