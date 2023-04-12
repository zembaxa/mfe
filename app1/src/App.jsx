import { useState } from 'react'
import './App.css'
import App2 from 'app2/App';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Application 1</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
      <App2 />
    </>
  )
}

export default App
