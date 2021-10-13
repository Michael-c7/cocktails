import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './Navbar'
import Home from "./Home"
import About from "./About"
import Error from "./Error"
import CocktailDetails from "./CocktailDetails"


function App() {
  
  return (
    <div className="App">
      <Router>
          <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          
          <Route path="/about">
            <About/>
          </Route>

          <Route path="/cocktail/:id">
            <CocktailDetails/>
          </Route>

          <Route path="*">
              <Error/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
