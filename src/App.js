import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Profile from './components/pages/Profile'
import Contact from './components/pages/Contact'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Listing from './components/pages/Listing'
import Projects from './components/pages/Project';
import PrivateRoute from './components/shared/PrivateRoute'
import Layout from './Layout';

//function App() {
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Login" component={Login} />
          <PrivateRoute path="/submissions">
            <Listing />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Projects />
          </PrivateRoute>
        </Switch>
      </Layout>

    </BrowserRouter>

  );
}

export default App;
