import React from 'react'
import {Button} from "@nextui-org/react";

const SecondaryCTA = () => {
  return (
    <div className='w-full bg-success h-[300px] my-6 flex flex-col items-center justify-center text-white gap-10 p-2 rounded-lg shadow-lg'>
        <p className='md:text-6xl text-3xl font-bold'>Ready to Simplify Your Voting Process?</p>

        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-primary text-white shadow-lg md:w-1/4">
      Sign Up for Free
    </Button>

      
    </div>
  )
}

export default SecondaryCTA
