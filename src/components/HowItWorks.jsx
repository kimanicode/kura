import React from 'react'
import analytics from '../assets/analytics.jpg'
import create from '../assets/create.jpg'
import invite from '../assets/invite.jpg'
import { Image } from '@nextui-org/react'

const HowItWorks = () => {
  return (
    <div className='w-full'>
        <p className='text-2xl text-primary font-semibold py-6 '>How It Works</p>
        <div className='flex flex-col justify-center items-center'>
            
            <div className='flex  items-center gap-4 md:flex-row flex-col-reverse  py-3'>
                <div className='flex-shrink-0 '>
                    <Image 
                        width={300}
                        height={300}
                        alt="NextUI hero Image"
                        src={create}
                        className='border-2 rounded-full border-danger'
                  
                    />
                </div>
                <div className='h-max bg-stone-300 w-[2px]'></div>

                <div className='basis-1/3 text-left flex flex-col justify-center  items-center  '>
                    <p className='p-2 bg-primary text-white rounded-full h-10 w-10 flex justify-center oldstyle-nums'>01</p>

                    <p className='font-semibold text-danger py-3'>Create Your Event</p>

                    <p className='font-extralight'>Set up your voting event with categories and nominees in just a few clicks.</p>
                </div>


            </div>

            <div className='flex  items-center md:flex-row-reverse gap-4 flex-col-reverse py-3 '>
                <div  className='flex-shrink-0 '>
                    <Image 
                        width={300}
                        height={300}
                        alt="NextUI hero Image"
                        src={invite}
                        className='border-2  border-danger rounded-full'
                  
                    />
                </div>

                <div className='basis-1/3 text-left flex flex-col justify-center  items-center'>
                    <p className='p-2 bg-primary text-white rounded-full h-10 w-10 flex justify-center oldstyle-nums'>02</p>

                    <p className='font-semibold text-danger py-3'>Invite Voters</p>
                    <p className='font-extralight'>Share a custom link with your audience, and let them vote from any device.</p>
                </div>


            </div>

            <div className='flex  items-center md:  gap-4 md:flex-row flex-col-reverse py-3'>
                <div  className='flex-shrink-0 '>
                    <Image 
                        width={300}
                        height={300}
                        alt="NextUI hero Image"
                        src={analytics}
                        className='border-2 rounded-full border-danger'
                  
                    />
                </div>

                <div className='basis-1/3 text-left flex flex-col   items-center'>
                    <p className='p-2 bg-primary text-white rounded-full h-10 w-10 flex justify-center oldstyle-nums'>03</p>

                    <p className='font-semibold text-danger py-3'>View Results</p>
                    <p className='font-extralight'>Track votes in real-time and export detailed reports when the event ends.</p>
                </div>


            </div>

        </div>
      
    </div>
  )
}

export default HowItWorks
