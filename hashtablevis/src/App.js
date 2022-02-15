import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        header
        <button className="">
          Insert Random Key
        </button>
        <button>
            Insrt(Key)
        </button>
        <button>
            Find(Key)
        </button>
        <button>
            Delete(Key)
        </button>
        <span>Key = <input id="input_vlaue" type="number" placeholder="Enter a Number"></input></span>
      </header>
    </div>
  );
}

export default App;
