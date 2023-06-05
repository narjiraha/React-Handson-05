
import './App.css';
import CounterClick from './Components/CounterClick';
import HoverCom from './Components/HoverCom';
import PureComp from './Components/PureComp';

function App() {
  return (
    <div className="App">
      <h1 className='Heading'>ReactJS Handson-05</h1>
      <CounterClick />
      <HoverCom />
      <PureComp />
    </div>
  );
}

export default App;
