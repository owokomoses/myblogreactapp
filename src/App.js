import './App.css';
import Navbar from  "./components/Navbar";
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';

function App(){
  return(
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          {/* <Home/> */}
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/Create">
              <Create/>
            </Route>
            <Route path="/useFetch">
              <useFetch/>
            </Route>
            <Route path="/BlogDetails">
              <useFetch/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
