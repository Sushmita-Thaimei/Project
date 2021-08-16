import './App.css';
import Navbar from './components/inc/Navbar';
import Book from './components/pages/Booking';
import Footer from './components/Footer';
import Header from './components/Header';
import Head from './components/Headline';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (   
    <Router>  

     
        <Switch> 
          <Route path="/booking" exact component={Book} />
        </Switch>

       
        
    </Router>
  );
}

export default App;

{/* <Router>  

<div className="App"> 
  <Navbar />

  <Switch> 
    <Route path="/booking" exact component={Book} />
  </Switch>

  <Head />
  <Header />
  <Body />
  <Footer />
</div>
  
</Router> */}