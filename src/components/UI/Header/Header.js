import './header.scss'
import { HelpOutline, InfoOutlined, SettingsOutlined, Menu} from '@material-ui/icons'
const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <img src="images/logo.png" alt="logo" />
            <span className="help-text">Meet</span>
        </div>
        <div className="action-block">
          <span className="header-time"> 9:09PM . Tue, 15 Feb </span>

          <HelpOutline className='icon-block' />
          <InfoOutlined className='icon-block' />
          <SettingsOutlined className='icon-block'/>

          <div className="action-end">
            <Menu className="icon-block" />
            <span className="icon-avatar">A</span>
          </div>
        </div>
    </div>
  )
}

export default Header