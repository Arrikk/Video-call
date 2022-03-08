import { Close, CommentOutlined, Group, Send } from "@material-ui/icons";
import "./messanger.scss";

const Messanger = () => {
  return (
    <div className="messanger-container">
      <div className="messanger-header">
        <h3>Meeting details</h3>
        <Close className="icon" />
      </div>

      <div className="messanger-header-tabs">
        <div className="tab">
          <Group className="icon" />
          <p>People(1)</p>
        </div>
        <div className="tab active">
          <CommentOutlined className="icon" />
          <p>Chat</p>
        </div>
      </div>

      <div className="chat-section">
          <div className="chat-block">
              <div className="sender">
                  You <small>3:00AM</small>
              </div>
              <p className="message">Actual Message</p>
          </div>
      </div>

      <div className="send-msg-section">
          <input type="text" placeholder="Send message" />
          <Send className="icon" />
      </div>
      
    </div>
  );
};

export default Messanger;
