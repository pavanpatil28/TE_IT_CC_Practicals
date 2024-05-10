import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';

function App() {
  return (
    <div className="App">
      <h1>We are in root component</h1>
      <Greet/>
      <Welcome/>
    </div>
  );
}

export default App;
