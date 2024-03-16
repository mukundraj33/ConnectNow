import React from 'react'
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../../assets/video.mp4';




const Home = () => {
  const [value, setvalue] = useState();
  const navigate = useNavigate();

  const handlejoin = useCallback(() => {
    navigate(`/room/${value}`);

  }, [navigate, value])



  return (
    <div>
      <style>
        {`
          * {
            margin: 0;
          padding: 0;
          background-color: black;
        color:white
          }

        `}
      </style>
      
      <div className='bg-blue-500 flex gap-[8vw]'>
        <div className='min-h-[50vh] w-1/2 flex flex-col  bg-blue-500 '>
          <div className='text-[#ece9df] font-extrabold text-8xl px-8 m-3 bg-blue-500 hover:text-amber-500 transition-all ease-in-out duration-1000'>
            ConnectNow
          </div>
          <div className='text-[#ece9df] font-extrabold text-4xl px-8 m-3 bg-blue-500'>
            OneOnOne
          </div>
          <div className='text-[#e6dab1] text-2xl  px-8 m-3 bg-blue-500'>
            'A video call seamlessly bridges geographic gaps, enabling individuals to engage in real-time face-to-face communication with live video and audio streams, fostering meaningful connections regardless of physical distance.'
          </div>
        </div>
        <video className='h-[45vh] object-cover w-[45vh] rounded-3xl m-3 bg-blue-500' src={video} autoPlay loop muted></video>
      </div>
      <div className='flex justify-center'>
        <div className='font-semibold text-2xl p-4'>
          Hello I am Mukund Raj, Please Enter Room Code -
        </div>
      </div>

      <div className='px-8 m-2 flex justify-center py-6'>
        <input type="text" placeholder='Enter Room code' className='p-2 rounded-md w-[300px] m-1 border text-white bg-black' value={value} onChange={(e) => { setvalue(e.target.value) }} />
        <button className='bg-black text-white border p-2 m-1 hover:bg-white hover:text-blue-800 font-bold transition-all ease-in-out rounded-md' onClick={handlejoin}>Join</button>
      </div>
      

    </div>
  )

}
export default Home
