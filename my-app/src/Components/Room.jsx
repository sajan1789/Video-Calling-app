import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useEffect } from 'react';
const Room = () => {
const {roomID}=useParams()
const myMeeting=async(element)=>{
    const appID = 1719582741;
      const serverSecret ="96fa806f69102dab1796987b0d18ea24"
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,Date.now().toString(),"Sajan");     
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Copy link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, 
        },
        
      });
}  
useEffect(() => {
  const handlePopstate = () => {
    // Refresh the browser when the back button is clicked
    window.location.reload();
  };

  window.addEventListener('popstate', handlePopstate);

  return () => {
    window.removeEventListener('popstate', handlePopstate);
  };
}, []);
    
  return (
    <div ref={myMeeting}  style={{ width: '100vw', height: '100vh' }}>

    </div>
  )
}

export default Room