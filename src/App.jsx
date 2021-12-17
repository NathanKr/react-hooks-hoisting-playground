import "./App.css";
import Reddit from "./components/Reddit";
import {useState} from 'react'

function App() {
  const [subject, setSubject] = useState("reactjs");
  return (
    <div className="App">
      <select onChange={(evt) => setSubject(evt.target.value)}>
        <option value="reactjs">reactjs</option>
        <option value="javascript">javascript</option>
      </select>
      <Reddit subject={subject} />
    </div>
  );
}

export default App;
