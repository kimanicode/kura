import React from 'react'
import {Card, CardFooter, CardHeader, CardBody} from "@nextui-org/react";
import { MdOutlineWifiProtectedSetup, MdOutlineSecurity } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";




const About = () => {
  return (
    <div className='flex w-full md:flex-row flex-col gap-3 py-10 '>
        
        <div className='basis-1/4 '>
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none"
            isHoverable
            
         >
            <CardHeader>
                <p className='h-9 w-9 bg-primary rounded-full flex justify-center items-center text-white p-2'>
                <MdOutlineWifiProtectedSetup size={25} />

                </p>

            </CardHeader>

            <CardBody>
                <p className='font-bold '>Easy Event Setup</p>
                <p>Launch your voting event in minutes with our intuitive interface.</p>

            </CardBody>


        </Card>

        </div>


        <div className='basis-1/4'>
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none"
            isHoverable
            
         >
            <CardHeader>
                <p className='h-9 w-9 bg-primary rounded-full flex justify-center items-center text-white p-2'>
                <MdOutlineSecurity  size={25} />

                </p>

            </CardHeader>

            <CardBody>
                <p className='font-bold '>Secure and Reliable</p>
                <p>Protect your voting process with top-tier security and fraud prevention.</p>

            </CardBody>


        </Card>

        </div>


        <div className='basis-1/4'>
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none"
            isHoverable
            
         >
            <CardHeader>
                <p className='h-9 w-9 bg-primary rounded-full flex justify-center items-center text-white p-2'>
                <IoMdAnalytics size={25} />

                </p>

            </CardHeader>

            <CardBody>
                <p className='font-bold '>Real-Time Analytics</p>
                <p> Monitor votes and generate reports instantly to see who’s leading.</p>

            </CardBody>


        </Card>

        </div>



        <div className='basis-1/4'>
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none"
            isHoverable
            
         >
            <CardHeader>
                <p className='h-9 w-9 bg-primary rounded-full flex justify-center items-center text-white p-2'>
                <FaPaintBrush size={25} />

                </p>

            </CardHeader>

            <CardBody>
                <p className='font-bold '>Custom Branding</p>
                <p>Tailor the look and feel of your voting event to match your brand identity.</p>

            </CardBody>


        </Card>

        </div>

      
    </div>
  )
}

export default About
