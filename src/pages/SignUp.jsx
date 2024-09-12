import { Button, Card, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { FaGoogle,FaLinkedin,FaApple } from "react-icons/fa";
import {Link } from 'react-router-dom'
import { CiFaceSmile } from "react-icons/ci";






const SignUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className='w-full flex justify-center md:py-10 py-6'>
      
        <Card className='border-2 md:w-1/3 px-3 py-6'>
            <div className='flex justify-center flex-col items-center'>
                <p className='text-xl font-semibold flex justify-center items-center gap-3'>Hello There! <CiFaceSmile /></p>
                <p>Create Account</p>
            </div>

            <div className='h-[1px] bg-gray-200 w-full'></div>

            <div className='flex justify-center gap-5 py-3'>
                <div className='bg-gray-200 py-3 px-6 rounded-lg text-primary'>
                    <p className=''><FaGoogle size={20} /> </p>       

                </div>
                <div className='bg-gray-200 py-3 px-6 rounded-lg text-primary'>
                    <p className=''><FaLinkedin size={20}/> </p>       

                </div>
                <div className='bg-gray-200 py-3 px-6 rounded-lg text-primary'>
                    <p className=''><FaApple size={20}  /> </p>       

                </div>

            </div>
            <div className='h-[1px] bg-gray-200 w-full'></div>
           
            <div className='flex flex-col gap-5 py-3'>
                <div className=''>
                    <Input
                    label="Username"
                    variant="bordered"
                    placeholder="kimani Dev"

                    
                    />

                </div>
                <div className=''>
                    <Input
                    label="Email"
                    variant="bordered"
                    placeholder="kimani@gmail.com"

                    
                    />

                </div>
                <div className=''>
                    <Input
                    label="Phone"
                    variant="bordered"
                    placeholder="+254-712-000-000"

                    
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
                <Input
                    label="Confirm password"
                    variant="bordered"
                    placeholder="Re-enter your password"
                    type={isVisible ? "text" : "password"} />
                </div>

                <div>
                    <Button className='bg-gradient-to-tr from-danger to-yellow-500 text-white w-full'>
                        Create Account


                    </Button>
                </div>
            </div>

            <p className='text-center py-3'>Already have an account? <Link to='/login' className='text-primary'>Login</Link></p>
        </Card>

    
    </div>
  )
}

export default SignUp
