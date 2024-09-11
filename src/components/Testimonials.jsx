
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {

 


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Adjusted to show one testimonial at a time for better readability
    slidesToScroll: 1,
   
  };

  const testimonials = [
    {
      id: 1,
      text: "The ease of setting up our voting event was incredible. What used to take days was done in under an hour with this platform. Our participants loved the seamless voting experience, and we were able to track results in real-time. We’ll definitely use this platform for all our future events.",
      name: " Emily ",
      position: "Event Coordinator at Creative Spark Events",
     
    },
    {
      id: 2,
      text: "This platform has been a game-changer for our annual awards. The custom branding options allowed us to match the voting pages perfectly with our event’s theme, and the security features gave us peace of mind. Our voter engagement soared, and the process was smooth from start to finish.",
      name: "Michael",
      position: "Marketing Manager at Trendy Fashion Awards",
      
    },
    // Add more testimonials as needed
  ];

  return (
    <div className='w-full px-10 py-5 bg-gray-100'>
      <p className='text-2xl text-danger py-3 font-semibold text-center'>Testimonials</p>
      <div className="mt-10 py-6">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex justify-center">
              <div className="bg-slate-200 rounded-xl flex flex-col md:flex-row items-center p-6 w-full md:w-3/5 mx-auto">
                
                <div className=" text-gray-700 md:text-left">
                  <p className="text-lg font-light mb-4">{testimonial.text}</p>
                  <div className="mt-4">
                    <p className="text-primary font-semibold">{testimonial.name}</p>
                    <span className="text-gray-500 italic">{testimonial.position}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;