import { Link } from "react-router-dom";
import { arrowRight2, bg1_5x } from "../assets";

const Hero = () => {
  return (
    <section className="h-screen w-full relative">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg1_5x})` }}
      />
      <div className="relative pt-16">
        <div className="p-px mt-24 md:mt-[120px] 3xl:mt-40">
            <h1 className="h2-medium md:h1 3xl:d1 3xl:font-[400] font-semibold text-center pointer-events-none">We Build High-Converting Websites That Deliver Results</h1>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-5 mt-10">
              <button className="btn-request-1">
                Book a Call
              </button>
              <Link to='/work'>
                <button className="btn-request-2 md:flex md:items-center">
                  See our Works
                  <img src={arrowRight2} alt="arrow right" className="object-contain md:ml-3 hidden md:block" />
                </button>
              </Link>
            </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;