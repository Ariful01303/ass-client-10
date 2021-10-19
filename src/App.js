import './App.css';
import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/Home/Home';
import Noservice from './components/Noservice/Noservice';
import Dentist from './components/Dentists/Dentist';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
import Enrolling from './components/Enrolling/Enrolling';
import Success from './components/Success/Success';
import Login from './components/Login/Login';
import PrivateRoute from'./components/PrivateRout/PrivateRoute';
import AuthProvider from './components/Authcontext/AuthProvider';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
             </Route> 
             <Route path="/home">
            <Home></Home>
             </Route>
             <PrivateRoute path="/service/:code">
               <Details></Details>
             </PrivateRoute>
             <Route path="/enroll/:num">
                <Enrolling></Enrolling>
               </Route>
             <Route path="/dantists">
               <Dentist></Dentist>
             </Route>
             
             <Route path="/complite">
               <Success></Success>
              </Route>
              <Route exact path="/login">
              <Login></Login>
            </Route>
             <Route path="/*">
                <Noservice></Noservice>
             </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>
     
    </div>
  );
}

export default App;
