import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import { usePopper } from 'react-popper'


function App() {
  const [originalUrl, setOriginalUrl ] = useState('')
  const [displayUrl ,setDisplayUrl] = useState('')
  const [shortUrl,setShortUrl] = useState('')
  const [veryOriginalUrl,setVeryOriginalUrl] = useState('')
  // const [referenceElement, setRefrenceElement] = useState(null)
  // const [popperElemenet,setPopperElemenet] = useState(null)
  // const [arrowElemenet,setArrowElemenet] = useState(null)
  // const { styles, attributes } = usePopper(referenceElement, popperElemenet, {
  //   modifiers: [{ name: 'arrow', options: { element: arrowElemenet } }],
  // });

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
      setShortUrl(res.data)
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
        <div className="containerButton">
          {/* <img src="https://cdn-icons-png.flaticon.com/512/8277/8277564.png" alt="" height='50' width='50'/> */}
          {shortUrl ?  (
            <>
              <p className='shortUrl'>{shortUrl.data.shortUrl}</p>
              {/* <div ref={setPopperElemenet} style={styles.popper} {...attributes.popper}>
                  this popper
                <div ref={setArrowElemenet} style={styles.arrow}/>
              </div> */}
            </>
            
          ) : (
            <p></p>
          )}
          <button className='submitbtn'>Meow</button>
        </div>
      </form>
    </div>
  )
}

export default App
