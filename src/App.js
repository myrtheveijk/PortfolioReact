import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// import { Header } from './components/Header';
// import { Footer } from './components/footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/contact" component={ Contact } />
      </Switch>
    </Router>
  );
}

export default App;
