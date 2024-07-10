import { useSelector } from 'react-redux';
import './App.css';
import Counter from './component/Counter';
import Theme from './component/Theme';

function App() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="App">
      <Theme />
      <div style={{ backgroundColor: theme === "light" ? "black" : "white", color: theme === "light" ? "black" : "white",backgroundColor===dark?"white"" }}>
        <Counter />
      </div>
    </div>
  );
}

export default App;
