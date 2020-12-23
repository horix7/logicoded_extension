import './App.css';
import { SignUpForm, SubmitCodeElement } from "./compnents/forms";
import { HeaderNav } from './compnents/mainnac'
import HomePage from './containers/home'

function App() {
  return (
    <div className="App">
      <HeaderNav />

      <HomePage />
      {/* <SignUpForm /> */}

      {/* <SubmitCodeElement /> */}
    </div>
  );
}

export default App;
