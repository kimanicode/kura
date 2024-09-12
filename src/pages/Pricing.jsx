import React from 'react'
import { CheckSquare, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, } from '@nextui-org/react';


const Pricing = () => {

  const plans = [
    {
      title: 'Freemium',
      price: '$0', // Around $200 USD
      features: [
        { name: 'Up to 20 voters', icon: <CheckSquare color="green" /> },
        { name: '1 active event', icon: <CheckSquare  color="green"/> },
        { name: 'Single administrator account', icon: <CheckSquare color="green" /> },
      
        
      ],
      buttonText: 'Get Started',
      buttonColor: 'primary',
    },
    {
      title: 'Momentum',
      price: '$99', // Around $400 USD
      features: [
        { name: 'Up to 5 active events', icon: <CheckSquare  color="green"/> },
        { name: 'Up to 10,000 votes', icon: <CheckSquare color="green" /> },
        { name: 'Advanced analytics', icon: <CheckSquare color="green" /> },
        { name: 'Multiple administrator accounts (up to 3)', icon: <CheckSquare color="green" /> },
        { name: 'Email and live chat support', icon: <CheckSquare  color="green"/> },
        
      ],
      buttonText: 'Choose Standard',
      buttonColor: 'danger',
    },
    {
      title: 'Enterprise',
      price: '$299', // Around $800+ USD (custom quote)
      features: [
        { name: 'Unlimited events', icon: <CheckSquare color="green" /> },
        { name: 'Unlimited votes', icon: <CheckSquare  color="green"/> },
        { name: 'Custom integrations (API access, CRM, marketing tools)', icon: <CheckSquare color="green" /> },
        { name: 'Advanced security (multi-factor authentication, end-to-end encryption)', icon: <CheckSquare color="green" /> },
        
      ],
      buttonText: 'Get a Quote',
      buttonColor: 'primary',
    },
  ];



  return (
    <div className='w-full  py-10'>
      <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center items-center py-3">
      <h2 className="text-3xl text-primary font-semibold text-center mb-8 ">Our Pricing Plans</h2>
      <div className='flex py-3 rounded-full justify-center bg-gray-100 md:w-1/4 items-center gap-3 border-2 '>
        <Button className='bg-white py-2 px-3 rounded-full text-primary'>One-Time</Button>
        <div className=''> Annually</div>

      </div>

      <div className='flex gap-4 justify-center md:flex-row flex-col md:w-full' >
          {plans.map((plan, index) => (
            <div key={index} className='basis-1/4 m-3 '>
              <Card className="shadow-lg p-6 rounded-lg bg-slate-300 flex justify-center items-center hover:bg-slate-200">
                <p className="text-center mb-4 font-extralight ">{plan.title}</p>
                <p className="text-primary text-center mb-4 font-bold text-3xl">
                  {plan.price}
                </p>
                <Button
                  color={plan.buttonColor}
                  css={{ width: '100%' }}
                  className="mt-4 w-2/3"
                  
                >
                  {plan.buttonText}
                </Button>
                <ul className="list-none space-y-2 py-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <p>{feature.icon}</p>
                      <p className='font-light'>{feature.name}</p>
                    </li>
                  ))}
                </ul>
               
              </Card>
            </div>
          ))}
          </div>
    

      </div>
        
      
    </div>
  )
}

export default Pricing
