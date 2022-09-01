// import logo from './logo.svg';
// import './App.css';

import Departments from './conteinars/Departments/Departments';

import Home from './conteinars/Home/Home';
import About from './conteinars/About/About';
import Doctors from './conteinars/Doctors/Doctors';
import contact from './conteinars/Contact/Contact';
import Appoiment from './conteinars/Appointment/Appoiment';
import { Route,Switch} from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Auth from './conteinars/Auth/Auth';


function App() {
  return (
      
      <div>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/Departments"} component={Departments}/>
          <Route exact path={"/About"} component={About}/>
          <Route exact path={"/Doctors"} component={Doctors}/>
          <Route exact path={"/Contact"} component={contact}/>
          <Route exact path={"/Appointment"} component={Appoiment} />
          <Route exact path={"/Auth"} component={Auth} />
        </Switch>
        <Footer />
      </div>
      
  );
}

export default App;
