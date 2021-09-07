import logo from './logo.svg';
import './App.css';
import HomeContainer from "./containers/HomeContainer"
import HeaderContainer from "./containers/HeaderContainer"

function App() {
  return (
    <div className="App">
      <div>
      <HeaderContainer />
      </div>
      <HomeContainer />
    </div>
  );
}

export default App;
