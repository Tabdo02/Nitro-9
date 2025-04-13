import { Link } from 'react-router-dom'
import { escapeDesktop, escapeMobile } from '../assets'
import { navbarItems, navbarSocials } from '../constants/'
const Navbar = ({onClick,closeNav}) => {
  return (
    <div className="absolute inset-0 w-full h-screen bg-primary-50 p-px pt-5 pb-10 md:pb-5 lg:py-0 flex flex-col">
       
       <div className='flex justify-end mb-5 lg:hidden'>
            <button onClick={onClick}>
                <img src={escapeMobile} alt="escape mobile" width={28} height={28} className='object-contain' />
            </button>
        </div>
    
        <div className='flex flex-col lg:flex-row justify-between w-full h-full '>
           
            {/* list */}
            <div className='lg:flex-1 lg:flex  lg:py-[110px] 3xl:py-[140px]'>
                    <ul className='flex flex-col lg:mx-7 3xl:mx-40 gap-y-4 lg:gap-y-10 3xl:gap-y-14 lg:my-11 3xl:my-12 '>
                        {navbarItems.map(({id,title,url})=>(
                            <li key={id} className='h3-small md:h3 font-medium text-primary-700'>
                                    <Link to={url} onClick={closeNav}>
                                        {title}  
                                    </Link>
                            </li>
                        ))}
                    </ul>
            </div>

            <div className='lg:flex lg:flex-col lg:justify-between lg:flex-1 border-l border-primary-100 lg:px-7 3xl:px-[60px] lg:pb-[60px] xl:pb-[80px] 3xl:pb-[170px] 3xl:ml-[7.5rem]'>
                <div>
                    <div className='lg:flex justify-end mt-[30px] xl:mt-10 mb-20 xl:mb-12 3xl:mb-24 hidden'>
                        <button onClick={onClick}>
                            <img src={escapeDesktop} alt="escape desktop" width={32} height={32} className='object-contain' />
                        </button>
                    </div>       
                    <div>
                        <p className='p3 lg:p2 text-primary-700 lg:mb-3 pointer-events-none'>Get in touch</p>
                        <h4 className='h4 lg:h3-small font-semibold text-primary-700'>info@template.com</h4>
                    </div>
                </div>
                
                <div className='hidden lg:flex flex-col space-y-6'>
                    <h4 className='h4 font-semibold text-primary-700 pointer-events-none'>Follow Us</h4>
                    <div className='flex space-x-6 '>
                        <ul className='flex space-x-8'>
                            {navbarSocials.map((item,index)=>(
                                index <=2 &&(<li key={index}><a href="#"><img src={item} alt="social" width={40} height={40} /></a></li>) 
                            ))}
                        </ul>
                        <ul className='flex space-x-8'>
                            {navbarSocials.map((item,index)=>(
                                index >2 &&(<li key={index}><a href="#"><img src={item} alt="social" width={40} height={40} /></a></li>) 
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

        </div>
        
    </div>
  )
}

export default Navbar