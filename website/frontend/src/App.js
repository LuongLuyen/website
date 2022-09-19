import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home.js'
import Content from './Components/Content/Content.js'
import Upload from './Components/Upload/Upload.js'
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/content' element={<Content/>} />
          <Route path='/content/upload' element={<Upload/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
