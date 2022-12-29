import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [originalUrl, setOriginalUrl ] = useState('')
  const [displayUrl ,setDisplayUrl] = useState('')
  const [veryOriginalUrl,setVeryOriginalUrl] = useState('')

  useEffect(() => {
    const timeOutId =setTimeout(() => setDisplayUrl(originalUrl), 500)
    return () => clearTimeout(timeOutId)
  },[originalUrl])
  

  const deleteHttp = (e) => {
    setVeryOriginalUrl(e.target.value)
    const result = e.target.value.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
    setOriginalUrl(result)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://103.187.146.72:3001/meow/short',{origUrl : veryOriginalUrl}).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err.message)
    })
  }

  return (
    <div className="App">
      <h1 className='title'>Meow<span className='dottitle'>.</span>Short</h1>
      <form className="card" onSubmit={handleSubmit}>
        <div className='inputContainer'>
          <span className='http'><p>https::/</p></span>
            <input type="text" className='original' placeholder='Put Your Url Here' onChange={deleteHttp} value={originalUrl}/>
        </div>
        <button className='submitbtn'>Meow</button>
      </form>
    </div>
  )
}

export default App
