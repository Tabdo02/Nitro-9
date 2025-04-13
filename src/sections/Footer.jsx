import { Link } from "react-router-dom"
import { newsletter } from "../assets"
import { footerItems, footerSocials, phonsNumbers } from "../constants"

const footer = () => {
  return (
    <section className="p-px bg-shades-50">
          <h1 className=" h1 md:d2 3xl:text-[100px] font-semibold py-10 pointer-events-none">
            Have an idea? <span className="underline font-[400] font-outfit">Let’s Talk</span>
          </h1>

          <div className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:justify-between mt-10 md:mt-[60px]">

              <div className="flex flex-col space-y-5 md:space-y-10">

                <div>
                  <h5 className="h5 text-shades-300 font-medium pointer-events-none mb-2">Get in touch</h5>
                  <h5 className="h5 text-shades-300 font-bold lg:font-semibold 3xl:h3">info@template.com</h5>
                </div>

                <div>
                  <p className="text-shades-300 p2 font-medium  mb-3 pointer-events-none">Phone</p>
                  <div>
                    {phonsNumbers.map((num,index)=>(
                      <p key={index} className="p4 3xl:p3 font-medium text-shades-300">{num}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="p3  font-bold 3xl:p2 mb-3 pointer-events-none">Address</p>
                  <p className=" p4 3xl:p3 font-medium ">2352 Middlefield Rd, Markham <br />
                    Ontario, Canada</p>
                </div>

              </div>

              {footerItems.map(({id,title,items})=>(
                <div key={id}>
                  <h5 className="text-shades-300 h5 font-medium mb-[17px] pointer-events-none">{title}</h5>
                  <ul className="flex flex-col space-y-3">
                  {items.map(({id,title,url})=>(
                      <li key={id}>
                        <Link to={url} className="text-shades-300 p4">
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="flex flex-col space-y-6">
               
                <div>
                    <h5 className="text-shades-300 font-medium h5 mb-8">Reach Out to Us</h5>
                    <div className="flex flex-col space-y-6">
                      <ul className="flex justify-start items-center space-x-8">
                        {footerSocials.map((social,index)=>(
                          index <= 2 &&
                          (<li  key={index}>
                            <a href="#">
                            <img src={social} alt="social" height={40} width={40} className="object-contain" />
                            </a>
                          </li>)
                        ))}
                      </ul>
                      <ul className="flex justify-start items-center space-x-8">
                        {footerSocials.map((social,index)=>(
                          index > 2 &&
                          (<li  key={index}>
                            <a href="#">
                            <img src={social} alt="social" height={40} width={40} className="object-contain" />
                            </a>
                          </li>)
                        ))}
                      </ul>
                    </div>
                </div>

                <p className="p2 text-shades-300 pointer-events-none">Join our mailing list and get to know <br className="hidden md:block" /> exciting stuff at first hand</p>

                <div className="w-[280px] h-14 md:h-16 md:w-[380px] lg:w-[280px] 3xl:w-[311px] flex bg-red-600">
                  <div className="bg-red-200  flex-1 h-full">
                    <input type="text" className="w-full h-full py-5 px-4 placeholder:p4 placeholder:text-neutral-500 text-shades-50 focus:outline-none focus:ring-0" placeholder="johnchoe@gmail.com" />
                  </div>
                  <div className="bg-primary-500 w-[60px] md:w-16 h-full flex justify-center items-center cursor-pointer">
                      <img src={newsletter} alt="new letter" className="object-contain" height={24} width={24} />
                  </div>
                </div>

              </div>

          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-2 md:space-y-0 mb-5 md:mb-8 mt-10 md:mt-[120px]">
            <p className="p4 text-shades-300 font-[200]  pointer-events-none">Made it with love by Hexwaave. Powered by Webflow.</p>
            <ul className="p5 text-shades-300 font-[200] flex space-x-5">
              <li>
                <Link to='/policy'>
                  Privacy Policy  
                </Link>
              </li>
              <li><Link to='#'>Sitemap</Link></li>
            </ul>
          </div>
    </section>
  )
}

export default footer