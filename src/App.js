import Home from './Components/Home/Home.js'
import Content from './Components/Content/Content.js'
import Login from './Components/Login/Login.js'
import Register from './Components/Register/Register.js'
import Upload from './Components/Upload/Upload.js'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  const user= true
  //get api
  const [data, setData] = useState(null)
  useEffect(() => {
      axios.get(process.env.REACT_APP_URL_DATA)
      .then((response) => {
          setData(response.data)
      })
  }, []) 
  if (!data) return null
  console.log(data)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/content' element={<Content props={data} />} />
        <Route path='/content/upload' element= {user ? <Upload/>:<Navigate to ='/content'/>}/>
      </Routes>
    </Router>
  );
}

export default App;
