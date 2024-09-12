
import React from 'react'
import oops from '../assets/oops.png'
import { Button, Image } from '@nextui-org/react'
import {useNavigate} from 'react-router-dom'

const Oops = () => {
    const navigate = useNavigate()

  const handleReturn = () =>{
    navigate('/')

  }
  return (
    <div className='w-full flex md:flex-row flex-col-reverse justify-center items-center p-10 '>
        <div>
            <Image
                src={oops}
                width={500}
            
            />
        </div>

        <div className=' flex flex-col justify-center items-center  gap-5'>
            <p className='text-primary font-bold md:text-5xl text-2xl'>Page Under Construction</p>

            <Button className='bg-gradient-to-tr from-pink-500 to-yellow-500 text-white md:w-full w-1/2 ' onClick={handleReturn}>
                Go back Home
            </Button>

        </div>
      
    </div>
  )
}

export default Oops
