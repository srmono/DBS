import ListEomployee from './components/ListEomployee';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div className="App">
      <Router>
      <HeaderComponent />
      <div className="container">
            <Switch>
              <Route exact path="/" component={ListEomployee}/>
              <Route exact path="/employees" component={ListEomployee}/>
              <Route exact path="/add-employee" component={AddEmployee}/>
            </Switch>
      </div>
      <FooterComponent />
      </Router>
    </div>
  );
}

export default App;

