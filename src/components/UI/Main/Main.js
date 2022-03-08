import "./main.scss";
import shortid from 'shortid'
import { Videocam, Keyboard, ArrowRight, ArrowLeft } from "@material-ui/icons";
import { useNavigate } from 'react-router-dom'
const Main = () => {
  const navigate = useNavigate();
  
  const startCall = () => {
    let uid = shortid.generate()
    navigate(`/${uid}#init`)
  }
  return (
    <div className="main">
      <div className="left">
        <div className="left-item">
          <h3>
            Premium video meetings. <br />
            Now free for everyone.
          </h3>
          <p>
            We re-engineered the service we built with secure business meetings,
            Google Meet, to make it free and available for all
          </p>
          <div className="lft-action">
            <button className="meet-join btn" onClick={startCall}>
              <Videocam className="meet-icon" /> New Meeting
            </button>
            <div className="meet-join">
              <Keyboard className="meet-icon" />
              <input
                className="meet-input"
                placeholder="Enter a code or link"
              />
            </div>
          </div>
        </div>
        <div className="learn-wrapper">
          <a href="#learn" className="learn-more">
            Learn more
          </a>{" "}
          about Google Meet
        </div>
      </div>
      <div className="right">
        <div className="left-img">
          <div className="img-icon left">
            <ArrowLeft />
          </div>
          <img src="images/svg1.svg" alt="Leftmage" />
          <div className="img-icon right">
            <ArrowRight />
          </div>
        </div>
        <div className="left-text">
          Get the best video quality you can wanto
        </div>
      </div>
    </div>
  );
};
export default Main;
