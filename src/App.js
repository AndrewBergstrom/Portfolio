import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import NotFound from './pages/NotFound'


function App() {
  return (
   
      <Router>
        <main id="main-page">
          <Navbar  sticky="top"/>
          
          <Switch>

            <Route exact path="/">
              <About />
            </Route>

            <Route exact path="/portfolio">
              <Portfolio />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route exact path="*">
              <NotFound />
            </Route>

          </Switch>
          
      
        </main>
        
        <Footer />
      </Router>
    
  );
}

export default App;
