import React  from 'react';
import  { BrowserRouter as Router ,Switch  , Route} from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import MovieDetails from './component/MovieDetails'; 
import './App.css';

function App() {

    return (
      <Router>
       <Navbar/>
      <div className="App">
       <div className="container">
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/movie/:id" component={MovieDetails} />
       </Switch>
       </div>
      </div>
      </Router>
    );
}

export default App;