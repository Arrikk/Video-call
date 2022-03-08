import { Call, Close, FileCopy, Link, Person, PersonAdd, Security } from '@material-ui/icons'
import { useState } from 'react'
import './meetinginfo.scss'

const MeetingLink = ({Me, createCall}) => {
    const [name, setName] = useState('')
  return (
    <div className='meeting-info-block'>
      <div className="meeting-header">
        <h3 className='name'>Make a call</h3>
          <Close className='icon needs-name' />
      </div>
      <div className="meet-link">
        <span> {Me} </span>
        <FileCopy className='icon' onClick={() => navigator.clipboard.writeText(Me)} />
      </div>
      <div className="permission-text meeting-name">
        <Link className='icon' />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="UserId" />
      </div>
      <p className="info-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, maxime?
      </p>
      <p className="small-text">
        Joined as bruiz.meet@meet.dev
      </p>
      <button className="add-people-btn set-name" onClick={() => createCall(name)}>
        <Call className='icon' /> Call
      </button>
    </div>
  )
}

export default MeetingLink