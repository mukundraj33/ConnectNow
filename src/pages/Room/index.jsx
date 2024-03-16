// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { ScenarioModel, ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


// const RoomPage = () => {
//     const {roomId} = useParams();
//     const myMeeting = async () =>{
//         const appID = 1314308263
//         const serverSecret = '36e3542c05dbd153a5f0c5a70b1e3639';
//         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now(),  "Piyush Garg");
//         const zp = ZegoUIKitPrebuilt.create(kitToken);

//         zp.joinRoom({
//             container:Element,
//             Scenario:{
//                 mode:ZegoUIKitPrebuilt.OneONoneCall,
//             }
//         })
//     }
//   return (
//     <div>
//       <div ref={myMeeting}/>
//     </div>
//   )
// }

// export default RoomPage
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
  const { roomId } = useParams();
  const containerRef = useRef(null); // Create a ref for the container

  useEffect(() => {
    const myMeeting = async () => {
      const appID = 1314308263;
      const serverSecret = '36e3542c05dbd153a5f0c5a70b1e3639';
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        'Mukund'
      );
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: containerRef.current, // Pass the container ref here
        Scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
      });
    };

    myMeeting(); // Call the async function to initialize the meeting
  }, [roomId]);

  return (
    <div className='bg-oblack flex justify-center items-center'>
     
        <div ref={containerRef} className='md:w-full md:h-[80%] w-[85vw] h-[100vh]'/>
  
      
    </div>
  );
};

export default RoomPage;
