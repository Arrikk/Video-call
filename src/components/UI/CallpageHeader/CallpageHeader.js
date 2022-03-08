import './callpageheader.scss'
import {Person, Message, Group} from '@material-ui/icons'

const CallpageHeader = () => {
  return (
    <div className='frame-header'>
        <div className="header-item icon-block">
            <Group className='icon' />
        </div>
        <div className="header-item icon-block">
            <Message className='icon' />
            <span className="alert-circle-icon"></span>
        </div>
        <div className="header-item date-block">
            <span>1:24AM</span>
        </div>
        <div className="header-item icon-block profile">
            <Person className='icon' />
        </div>
    </div>
  )
}

export default CallpageHeader