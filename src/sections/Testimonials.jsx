import { useRef } from "react";
import { arrowLeft, arrowRight } from "../assets"
import TestimonialCard from "../components/TestimonialCard"
import { testimonials } from "../constants"

const Testimonials = () => {
  const scrollRef = useRef(null);
  // Function to scroll left
  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };

  // Function to scroll right
  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300; 
    }
  };

  return (
    <section className="p-px py-20 md:py-[100px] bg-shades-50">
      <h1 className="text-center h2-small md:h2 lg:h1-small font-medium md:font-semibold mb-10 md:mb-[60px] pointer-events-none">A few words from our clients</h1>
      
      <div className="flex scroll-hide items-start relative overflow-auto  gap-x-5 md:gap-x-8" ref={scrollRef}>
        {
          testimonials.map((testimonial)=>(
           <TestimonialCard key={testimonial.id} {...testimonial} />
          ))
        }
      </div>

      <div className="mt-[60px] hidden lg:flex justify-center items-center space-x-10">
        <img src={arrowLeft} alt="arrow left" height={24} width={24} className="cursor-pointer"onClick={handleScrollLeft}/>
        <img src={arrowRight} alt="arrow right" height={24} width={24} className="cursor-pointer" onClick={handleScrollRight}/>
      </div>

    </section>
  )
}

export default Testimonials