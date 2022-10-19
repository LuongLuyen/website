import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home.js'
import Content from './Components/Content/Content.js'
import Login from './Components/Login/Login.js'
import Upload from './Components/Upload/Upload.js'
import {useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  // get api
  const [data, setData] = useState(null)
  useEffect(() => {
      axios.get(`https://luongluyen-film-server.herokuapp.com/api/posts/film`)
      .then((response) => {
          setData(response.data)
      })
  }, [])
  if (!data) return null
  console.log(data)
  return (
    <Router>
      <div className='react_app'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/content' element={<Content props={data}/>} />
          <Route path='/content/login' element={<Login />} />
          <Route path='/content/login/upload' element={<Upload/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
