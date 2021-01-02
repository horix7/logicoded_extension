import './App.css';
import { SignUpForm, SubmitCodeElement } from "./compnents/forms";
import { HeaderNav } from './compnents/mainnac'
import HomePage from './containers/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     

  <Router> 

      <Switch>
          <Route path="/signup">
          <SignUpForm />

          </Route>
          <Route path="/commit">
      <SubmitCodeElement />

          </Route>
          <Route path="/">
      <HeaderNav />

            <HomePage />

          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
