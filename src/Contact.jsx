import Header from "./sections/Header"
import Footer from "./sections/Footer"
import { aboutUs, navbarSocials, phonsNumbers2 } from "./constants"
import MyInputs from './components/MyInputs'

const Contact = () => {
  return (
    <>
    <Header txtColor="text-primary-600" className="bg-shades-300" />
    <section className="p-px py-[60px] lg:py-[100px]">
        <h1 className="text-primary-800 h2-small md:h2 lg:h1 mb-10 md:mb-[60px] lg:mb-20 3xl:mb-[100px] pointer-events-none">
          Hey! Tell us about your project
        </h1>
        <div className="flex flex-col lg:flex-row gap-x-10 3xl:gap-x-[60px]">

          <div className="flex flex-col flex-1 gap-y-10">
            {aboutUs.map(
              (label,index)=>(
                index !== 4 
                  ? 
                  <MyInputs title={label} />
                  :
                  <MyInputs title={label}  input={false}/>
              )
            )}

            <button className="bg-primary-500 py-4 font-medium text-[24px] leading-[36px]">
              Submit
            </button>

          </div>

          <div className="flex flex-col justify-start items-end text-primary-600 mt-10 gap-y-10">
            <div className="flex flex-col gap-y-3 justify-end items-end pointer-events-none">
              <p className="p3 md:p2">Or write us an email directly</p>
              <h2 className="h4 md:h2-small font-semibold">info@underrrated.com</h2>
            </div>

            <div className="flex flex-col gap-y-3 justify-end items-end pointer-events-none">
              <h3 className="h4 md:h3-small font-semibold">Phone</h3>
              {phonsNumbers2.map((p,index)=>(
                <p key={index} className="p3 md:p2">{p}</p>
              ))}
            </div>

            <div className="flex flex-col gap-y-3 justify-end items-end pointer-events-none">
              <h3 className="h4 md:h3-small font-semibold">Address</h3>
              <p className="p3 md:p2">2352 Middlefield Rd, Markham <br />
                 Ontario, Canada</p>
            </div>

            <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-8">

              <div className="flex gap-x-8">
                {navbarSocials.slice(0,3).map((social,index)=>(
                    <img src={social} key={index} alt="social" className="size-10 cursor-pointer" />
                ))}
              </div>

              <div className="flex gap-x-8">
                {navbarSocials.slice(3,6).map((social,index)=>(
                      <img key={index} src={social} alt="social" className="size-10 cursor-pointer" />
                  ))}
              </div>

            </div>

          </div>

        </div>
    </section>
    <Footer />
    </>
  )
}

export default Contact