import { Button, Card, Input,Image } from '@nextui-org/react'
import React, { useState } from 'react'
import { FaGoogle,FaLinkedin,FaApple } from "react-icons/fa";
import {Link } from 'react-router-dom'
import search from '../assets/search.png'






const Login = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className='w-full flex justify-center md:py-10 py-6'>
      
        <Card className='border-2 md:w-1/3 w-[80%]  px-3 py-6'>
            <div className='flex justify-center flex-col items-center py-3'>
                <p className='text-xl font-semibold '>Welcome back</p>
                <p>Please enter your details to login</p>
            </div>

            <div className='h-[1px] bg-gray-200 w-full'></div>

            <div className='flex justify-center gap-5 py-3'>
                <div className='bg-gray-200 py-3 px-6 rounded-lg text-primary'>
                <Image 
                            src={search}
                 />       

                </div>
                <div className='bg-gray-200 py-3 px-6 rounded-lg text-primary'>
                    <p className=''><FaLinkedin size={24}/> </p>       

                </div>
                <div className='bg-gray-200 py-3 px-6 rounded-lg text-primary'>
                    <p className=''><FaApple size={24}  /> </p>       

                </div>

            </div>

            <div className='h-[1px] bg-gray-200 w-full'></div>

            <div className='flex flex-col gap-5 py-3'>
                <div className=''>
                    <Input
                    label="Email"
                    variant="bordered"
                    placeholder="kimani@gmail.com"

                    
                    />

                </div>
                <div>
                <Input
                    label="Password"
                    variant="bordered"
                    placeholder="Enter your password"
                    type={isVisible ? "text" : "password"} />
                </div>

                <div>
                    <Button className='bg-gradient-to-tr from-danger to-yellow-500 text-white w-full'>
                        Login


                    </Button>
                </div>
            </div>

            <p className='text-center py-3'>Don't have an account yet? <Link to='/sign-up' className='text-primary'>Sign Up</Link></p>
        </Card>

    
    </div>
  )
}

export default Login
