
import './App.css';
import Debounce from './Weather/Debounce';
import WeaApp from './Weather/WeaApp';
import Location from './Weather/Location';
import CuurentWea from './Weather/CuurentWea';
import Loader from './Loader';
function App() {
  return (
    <div className="App">
     {/* <WeaApp /> */}
     {/* <Debounce /> */}
     {/* <Location /> */}
     <CuurentWea />
     {/* <Loader /> */}
    </div>
  );
}

export default App;
