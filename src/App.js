import Homepage from './components/Homepage/Homepage'
import Callpage from './components/Callpage/Callpage'
import Nomatch from './components/Nomatch/Nomatch'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route exact path='/:name' element={<Callpage />} />
        <Route exact path='*' element={<Nomatch />} />
      </Routes>
    </Router>
  )
}
export default App