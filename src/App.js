import Home from './Components/Home/Home.js'
import Content from './Components/Content/Content.js'
import Login from './Components/Login/Login.js'
import Register from './Components/Register/Register.js'
import Upload from './Components/Upload/Upload.js'
import Admin from './Components/Admin/Admin.js'
import Notification from './Components/Notification/Notification.js'
import Help from './Components/Help/Help.js'
import Error from './Components/Content/Error.js'
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'

function App() {
  const [items, setItems] = useState([])
  const [data, setData] = useState(null)
  const [users, setUsers] = useState(null)
  const domain = process.env.REACT_APP_SERVER

  useEffect(() => {
    const items = JSON.parse(sessionStorage.getItem('items'))
    if (items) {
     setItems(items)
    }
  }, [])
  //get api
  useEffect(() => {
      axios.get(`${domain}/api/posts/film`)
      .then((response) => {
          setData(response.data)
      })
  }, [domain]) 
  useEffect(() => {
      axios.get(`${domain}/api/posts/user`)
      .then((response) => {
          setUsers(response.data)
      })
  }, [domain]) 
  if (!data) return (
    <div className='loading'>
      <h1>Vui lòng chờ....</h1>
    </div>
  )
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/error' element={<Error/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/content' element={items[0] ? <Content props={data}/> : <Login/>}/>
        <Route path='/admin' element={items==='admin123' ? <Admin props={users}/> : <Content/>}/>
        <Route path='/upload' element= {items[0] ? <Upload/>:<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
