import './nomatch.scss'
import Header from '../UI/Header/Header'
import {Link} from 'react-router-dom'

const Nomatch = () => {
  return (
    <div className='no-match'>
      <Header />
      <div className="no-match-content">
        <h2>Invalid Video Call</h2>
        <div className="action-button">
          <Link to="/" className='btn'>Return to home</Link>
        </div>
      </div>
    </div>
  )
}

export default Nomatch