// import logo from './logo.svg';
// import './App.css';
import About from './conteinars/About/About';
import Appoiment from './conteinars/Appointment/Appoiment';
import Contact from './conteinars/Contact/Contact';
import Departments from './conteinars/Departments/Departments';
import Doctors from './conteinars/Doctors/Doctors';
import Home from './conteinars/Home/Home';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function App() {
  return (
      
      <>
         <Header />
        {/* <Home /> */}
        {/* <About/> */}
        {/* <Doctors/> */}
        {/* <Departments/> */}
        {/* <Appoiment/> */}
        <Contact/>
         <Footer />
      </>
      
  );
}

export default App;
