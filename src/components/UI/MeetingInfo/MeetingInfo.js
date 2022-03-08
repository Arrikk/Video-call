import { Call, CallEnd, Close } from "@material-ui/icons";
import "./meetinginfo.scss";

const MeetingInfo = ({ dailerName, answerCall, rejectCall}) => {
  return (
    <div className="call-notification-container">
      <div className="call-notification">
        <span>{dailerName} Calling</span>
        <div className="icon-block">
          <div className="icon-item" onClick={answerCall}>
            <Call className="green" />
          </div>
          <div className="icon-item" onClick={rejectCall}>
            <CallEnd className="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingInfo;
