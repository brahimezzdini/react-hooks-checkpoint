import React  from 'react';
import  { BrowserRouter as Router ,Switch  , Route} from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import MovieDetails from './component/MovieDetails'; 
import './App.css';

function App() {

    return (
      <Router>
      
      <div className="App">
       <div className="container">
       <Switch>
         <Route exact path="/movies" component={Home} />
         <Route exact path="/movies/:id" component={MovieDetails} />
             <Route exact component={Home} />
       </Switch>
       </div>
      </div>
      </Router>
    );
}

export default App;
