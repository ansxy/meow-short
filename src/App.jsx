import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [originalUrl, setOriginalUrl ] = useState('')

  const deleteHttp = (e) => {
    const result = e.target.value.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
    setOriginalUrl(result)
  }

  return (
    <div className="App">
      <h1 className='title'>Meow<span className='dottitle'>.</span>Short</h1>
      <div className="card">
        <div className='inputContainer'>
          <span className='http'><p>http::/</p></span>
          <input type="url" className='original' placeholder='Put Your Url Here' onChange={deleteHttp} value={originalUrl}/>
        </div>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
    </div>
  )
}

export default App
