
import './App.css';
import HomePage from './Components/Page1/HomePage';
import Header from './Header/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import CreateForm from './Components/CreateForm/CreateForm';
import DataTable from './Components/SinglePage.js/DataTable';

 function App() {
  return (
    <div className="App">
  
  <Router>
  <Header/>

  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/create" component={CreateForm}/>
    <Route path="/:id" component={DataTable}/>
    </Switch>
 
  </Router>
  
    </div>
  );
}

export default App;

