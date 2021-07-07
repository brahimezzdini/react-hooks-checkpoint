import React  from 'react';
import  { BrowserRouter as Router ,Switch  , Route} from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import MovieDetails from './component/MovieDetails'; 
import './App.css';

function App() {

    return (
      <>
       <Navbar/>
      <div className="App">
       <div className="container">
       <Switch>
         <Route exact path="https://brahimezzdini.github.io/react-hooks-checkpoint/" component={Home} />
         <Route exact path="https://brahimezzdini.github.io/react-hooks-checkpoint/movies/:id" component={MovieDetails} />
             <Route exact component={Home} />
       </Switch>
       </div>
      </div>
      </>
    );
}

export default App;
