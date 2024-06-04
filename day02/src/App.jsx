import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  let [state, setstate] = useState(0);

  let [states, setstates] = useState(0);

  function vote() {
    setstate(state + 1)
  }

  function votes() {
    setstates(states + 1)
  }

  function result() {

    if (state > states) {
      document.getElementById('f').innerHTML = "We were not on a break"
    }
    if (states > state) {
      document.getElementById('f').innerHTML = "We were on a break"
    }
  }


  return (
    <div className="App">

      <div className='asa'>
        <div className='main'>

          <div className='img'>
            <img src="https://i.pinimg.com/564x/c6/38/b4/c638b46aee622928529c54a119150fb5.jpg" alt="not found" />
          </div>
          <br />
          <div className='heading'>
            <h1>{state}</h1></div><br />
          <button onClick={vote} className='btn btn-danger form-control'>We were not on a break</button>
        </div>

        <div className='main'>
          <div className='img'>
            <img src="https://i.pinimg.com/564x/e3/24/3d/e3243d5b4e7a94ec87542b282fe1eef3.jpg" alt="not found" /></div><br />
          <div className='heading'><h1>{states}</h1></div><br />
          <button onClick={votes} className='btn btn-danger form-control'>We were on a break</button>
        </div>


      </div>


      <h1 id='f'></h1>

      <button onClick={result} id='f1' className='btn btn-danger'>Result</button>

    </div>


  );
}

export default App;