import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home.js'
import Content from './Components/Content/Content.js'
import Upload from './Components/Upload/Upload.js'
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [data,setData] = useState()
  console.log(data)
   //api
   useEffect(()=>{
    async function getFilm(){
        try{
            const data = await axios.get('http://localhost:5000/api/posts/film')
            setData(data.data)
        }catch(err){
            console.log(err)
        }
    }
    getFilm ()
},[])
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/content' element={<Content props={data} />} />
          <Route path='/content/upload' element={<Upload/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
