import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home.js'
import Content from './Components/Content/Content.js'
import Login from './Components/Login/Login.js'
import Register from './Components/Register/Register.js'
import Upload from './Components/Upload/Upload.js'
import {useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  //get api
  const [data, setData] = useState(null)
  useEffect(() => {
      axios.get(`https://server-97i3.onrender.com/api/posts/film`)
      .then((response) => {
          setData(response.data)
      })
  }, [])
  if (!data) return null
  console.log(data)
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/content' element={<Content props={data}/>} />
          <Route path='/content/upload' element={<Upload/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
