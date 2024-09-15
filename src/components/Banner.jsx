import React from 'react'
import { Button,Input ,Image } from '@nextui-org/react'
import {useNavigate} from 'react-router-dom'
import next from '../assets/fast-forward.png'
import { MdArrowForwardIos } from "react-icons/md";


const Banner = () => {
  const navigate = useNavigate() ;

  const handleGetStarted = ()=>{
    navigate('/sign-up')
  }
  return (
    <div className=' flex flex-col justify-center items-center  w-full' >
        <div className='bg-primary md:h-20  h-[150px] rounded-lg md:w-2/3 w-full flex justify-between my-3 items-center px-3 py-3 md:flex-row flex-col'>
          <div className='px-3 py-6'>
            <p className='text-white font-bold md:p-[1px] '>Vote with a code</p>
          </div>
          <div className='basis-1/2 bg-white   flex gap-2'>
            <div className='w-[70%]'>
              <Input type="email" label="# Enter the code " className='bg-white rounded-none' />
            </div>
            
              <div className='md:w-[25%] py-2 '>
                <Button className=' rounded-full bg-primary text-white w-full'>
                <MdArrowForwardIos />


              </Button>
            
              </div>


          </div>
      

        </div>
        <div className='w-full flex justify-center flex-col md:text-center text-left'>
            <p className='md:text-6xl text-3xl font-bold font-mono py-3 py-10 '>Effortless online voting  for events of any size</p>
            <p className='py-3 md:text-2xl basis-1/2  font-extralight'>                
              Enables real-time, secure voting for Awards, Competitions, and More – All on One Platform
            </p>

        </div>
        <div className='w-full py-6 flex justify-center'>
        <Button  color="danger" href="#" variant="shadow" className='md:w-1/4 w-full' onClick={handleGetStarted}>
            Get Started 
          </Button>

          
        </div>
      
    </div>
  )
}

export default Banner
