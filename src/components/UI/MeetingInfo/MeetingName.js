import { Call, Close, FileCopy, Link, Person, PersonAdd, Security } from '@material-ui/icons'
import './meetinginfo.scss'
import {useState} from 'react'

const MeetingName = ({setCallerName}) => {
  const [name, setName] = useState('')
  const setCaller = () => {
    if(name !== ''){
      setCallerName(name)
    }
  }
  return (
    <div className='meeting-info-block'>
      <div className="meeting-header">
        <h3 className='name'>Set your dislay name</h3>
          <Close className='icon needs-name' />
      </div>
      <div className="permission-text meeting-name">
        <Person className='icon' />
        <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Your name" />
      </div>
      <p className="info-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, maxime?
      </p>
      <button className="add-people-btn set-name" onClick={setCaller}>
        <Call className='icon' /> Continue
      </button>
    </div>
  )
}

export default MeetingName