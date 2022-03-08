import {
  ArrowDropUp,
  ClosedCaption,
  DesktopMac,
  Mic,
  MicOff,
  Phone,
  StopScreenShare,
  Videocam,
} from "@material-ui/icons";
import "./callpagefooter.scss";

const CallpageFooter = (props) => {
  const {
    isPresenting,
    stopScreenShare,
    screenShare,
    isAudio,
    disConnectCall,
    toggleAudio,
  } = props;
  return (
    <div className="footer-item">
      <div className="left-item">
        <div className="icon-block">
          Meeting details
          <ArrowDropUp className="icon" />
        </div>
      </div>

      <div className="center-item">
        <div className="icon-block">
          {isAudio ? <Mic className="icon" /> : <MicOff className="icon red" />}
        </div>
        <div className="icon-block calling" onClick={disConnectCall}>
          <Phone className="icon" />
        </div>
        <div className="icon-block">
          <Videocam className="icon" />
        </div>
      </div>

      <div className="right-item">
        <div className="icon-block">
          <ClosedCaption className="icon red" />
          <p className="title">Turn on captions</p>
        </div>
        {isPresenting ? (
          <div className="icon-block" onClick={stopScreenShare}>
            <StopScreenShare className="icon red" />
            <p className="title">Stop Presenting</p>
          </div>
        ) : (
          <div className="icon-block" onClick={screenShare}>
            <DesktopMac className="icon" />
            <p className="title">Present now</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallpageFooter;
