import './App.css';
import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/Home/Home';
import Noservice from './components/Noservice/Noservice';
import Dentist from './components/Dentists/Dentist';
import Appoinment from './components/Appoinment/Appoinment';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
             </Route> 
             <Route path="/home">
            <Home></Home>
             </Route>
             <Route path="/dantists">
               <Dentist></Dentist>
             </Route>
             <Route path="/appointment">
               <Appoinment></Appoinment>
             </Route>
             <Route path="/*">
                <Noservice></Noservice>
             </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     
    </div>
  );
}

export default App;
