import CallpageFooter from "../UI/CallpageFooter/CallpageFooter";
import CallpageHeader from "../UI/CallpageHeader/CallpageHeader";
import MeetingInfo from "../UI/MeetingInfo/MeetingInfo";
import MeetingName from "../UI/MeetingInfo/MeetingName";
import Messanger from "../UI/Messanger/Messanger";
import "./callpage.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Peer from "simple-peer";
import io from "socket.io-client";
import shortid from "shortid";
import MeetingLink from "../UI/MeetingInfo/MeetingLink";
import Tone from '../../ring.mp3'

const Callpage = () => {
  let uid = shortid.generate();
  const navigate = useNavigate();
  const { name } = useParams();

  const alertTimeout = null;
  let peerData = null;
  const socket = io.connect("http://localhost:5000");
  const [popupMeeting, setPopupMeeting] = useState(false);
  const [streamObj, setStreamObj] = useState();
  const [screenCastObj, setScreenCastObj] = useState();
  const [isPresenting, setIsPresenting] = useState(false);
  const [isMessanger, setIsMessenger] = useState(false);
  const [messageAlert, setMessageAlert] = useState({});
  const [isAudio, setIsAudio] = useState(true);
  const [Me, setMe] = useState();

  const [userToCall, setUserToCall] = useState("");
  const [caller, setCaller] = useState();
  const [callerSignal, setcallerSignal] = useState();
  const [callerName, setCallerName] = useState("");
  const [callAccepted, setCallAccepted] = useState(false);
  const [inComing, setIncoming] = useState(false);
  const [dailerName, setDailerName] = useState();

  useEffect(() => {
    let cancel = false
    // navigator.mediaDevices
    // .getUserMedia({
    //   audio: true,
    //   video: true,
    // })
    // .then((stream) => {
    //   setStreamObj(stream);
    //   let myVideo = document.getElementById("myVideo");
    //   addVideo(myVideo, stream)
    // });
    socket.on("me", (me) => {
      if(cancel) return
      setMe(me);
      console.log("I am Me " + Me);
    });
    initWebRTC();

    socket.on("call-user", (data) => {
      if(cancel) return
      setcallerSignal(data.signal);
      setCaller(data.from);
      setIncoming(true);
      setDailerName(data.name);
      Ring()
      console.log("Calling From " + data.from);
    });

    return (() => cancel = true)
    
    // eslint-disable-next-line
  }, []);

  const Ring = () => {
    let audio = new Audio(Tone)
    audio.play()
    if(inComing){
    }
  }
  const addVideo = (video, stream) => {
    video.srcObject = stream;
    // video.src = window.URL.createObjectURL(stream)
  }

  const initWebRTC = () => {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true,
      })
      .then((stream) => {
        setStreamObj(stream);
        console.log(stream);
        let myVideo = document.getElementById("myVideo");
        addVideo(myVideo, stream)
      });
  };

  const createCall = (id) => {
    console.log(streamObj);
    let peer = new Peer({
      initiator: true,
      trickle: false,
      stream: streamObj,
    });

    peer.on("signal", (signal) => {
      socket.emit("call-user", {
        userToCall: id,
        signalData: signal,
        from: Me,
        name: callerName,
      });
    });

    peer.on("stream", (stream) => {
      let myVideo = document.getElementById("userVideo");
      addVideo(myVideo, stream)
    });

    socket.on("call-accepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });
    peerData = peer;
  };

  const answerCall = () => {
    let peer = new Peer({
      initiator: false,
      trickle: false,
      stream: streamObj,
    });

    peer.on("signal", (signal) => {
      socket.emit("answer", {
        to: caller,
        signal: signal,
      });
    });

    peer.on("stream", (stream) => {
      let userVideo = document.getElementById("userVideo");
      addVideo(userVideo, stream)
    });

    peer.signal(callerSignal);
    peerData = peer;
  };


  const screenShare = () => {
    navigator.mediaDevices.getDisplayMedia({cursor: true})
    .then((screen) => {
      peerData.replaceTrack(
        streamObj.getVideoTracks()[0],
        screen.getVideoTracks()[0],
        streamObj()
      )
      setScreenCastObj(screen)
      screen.getVideoTracks()[0].onended = () => {
        peerData.replaceTrack(
          screen.getVideoTracks()[0],
          streamObj.getVideoTracks()[0],
          streamObj
        )
      }
      setIsPresenting(true)
    })
  };
  const stopScreenShare = () => {
    screenCastObj.getVideoTracks().forEach(tracks => {
      tracks.stop()
    })
    peerData.replaceTrack(
      screenCastObj.getVideoTracks()[0],
      streamObj.getVideoTracks()[0],
      streamObj
    )
    setIsPresenting(false)
  };

  const toggleAudio = (value) => {
    // streamObj.getAudioTracks()[0].enabled = value
    // setIsAudio(value)
  };

  const rejectCall = () => {
    peerData.destroy();
  };

  const disconnectCall = () => {
    peerData.destroy();
    navigate("/");
  };

  return (
    <div className="callpage-container">
      <div className="video-container">
        <div className="video-item">
          {streamObj ? (
            <video id="myVideo" muted autoPlay></video>
          ) : (
            <span className="user-avatar">
              {callerName.charAt(0).toLocaleUpperCase()}
            </span>
          )}

          <span className="username">{callerName} (You)</span>
        </div>
        <div className="video-item">
          {callAccepted ? (
            <video id="userVidei"></video>
          ) : (
            <span className="user-avatar">B</span>
          )}

          <span className="username">Arrikk</span>
        </div>
      </div>
      <CallpageHeader />
      {!callerName && <MeetingName setCallerName={setCallerName} />}
      {inComing && !callAccepted && (
        <MeetingInfo
          answerCall={answerCall}
          rejectCall={rejectCall}
          dailerName={dailerName}
        />
      )}
      {callerName && !inComing && (
        <MeetingLink createCall={createCall} Me={Me} />
      )}
      <CallpageFooter
        isPresenting={isPresenting}
        screenShare={screenShare}
        stopScreenShare={stopScreenShare}
        isAudio={isAudio}
        toggleAudio={toggleAudio}
        disconnectCall={disconnectCall}
      />
      <Messanger />
    </div>
  );
};

export default Callpage;
