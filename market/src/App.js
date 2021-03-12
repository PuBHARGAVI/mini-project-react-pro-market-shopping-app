import './App.css';
import axios from 'axios';
import service from './Components/Service.js'
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom' 
import HomeComponent from './Components/HomeComponent';
function App() {
  axios.get(
    "https://api.mocki.io/v1/7bd0682b"
  )
  .then((response) => {
    var urldata = [];
    urldata=response.data.products;
    service.apidata=urldata;
    console.log()
  });
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <HomeComponent></HomeComponent>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
