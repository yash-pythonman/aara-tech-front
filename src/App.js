import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Shop from './components/Shop';
import AddShop from './components/AddShop';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
            <h1> Aaratech Assignment</h1>
          <menu className="Menu">
           <a href="/">Home</a>
           <a href="/registration">Registration</a>
           <a href="/addShop">Add Shop</a>
        </menu>
        </header>
        
      <Router>    
      <div className="container">   
        <Switch>    
          <Route exact path='/' component={Home} ></Route>    
          <Route path='/shop' component={Shop} ></Route>  
          <Route path='/addShop' component={AddShop} ></Route>     
        <Route path='/login' component={Login} ></Route>     
        <Route path='/registration' component={Registration} ></Route>     
        </Switch>    
      </div>    
    </Router> 
    </div>
  );
}

export default App;
