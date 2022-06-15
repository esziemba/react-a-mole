import { useState } from 'react';
import MoleContainer from './MoleContainer';
import Controls from './Controls';


const App = () => {
  const [score, setScore] = useState(0)
  const [start, setStart] = useState(false)

  let hills = []

  for (let i = 0; i < 9; i++) {
    hills.push(<MoleContainer key={i} setScore={setScore} score={score}  />)
  }

  return (
    <div className="App">
      <Controls score={score} setScore={setScore} setStart={setStart} />
      {start ? 
        <div className='d-flex justify-content-center py-4'>
          <div id='hills-section' className='d-flex justify-content-evenly flex-wrap'>{hills}</div>
        </div>
        : null
      }
    </div>
  );
}

export default App;
