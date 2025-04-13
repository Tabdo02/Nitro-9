import { bulletPoint } from '../assets';
import Web from '../assets/SVG/Web';
import { web, webtxt } from '../constants';
const WebDev = () => {
  return (
    <section className="p-px py-10 text-primary-700 pointer-events-none">
        <div className="flex flex-col 3xl:flex-row 3xl:justify-start 3xl:items-start 3xl:space-x-8 py-10 md:py-20 lg:py-[100px] px-5 md:px-8  bg-primary-50">
            
            <div className='flex justify-center md:justify-start  items-center md:items-start mb-20 3xl:mb-0'>
                <Web />
            </div>
            
            <div className='felx flex-col space-y-[35px]'>
                <h1 className='h2-small md:h2 lg:h1 font-semibold'>Web Development</h1>
                <p className='p3 md:p2'>{webtxt}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-10'>
                    {web.map((w,index)=>(
                        <div key={index} className='flex justify-start items-center space-x-[9px]'>
                            <img src={bulletPoint} alt="bullet point" width={32} height={32}/>
                            <p className='p1 font-medium'>{w}</p>
                        </div>
                    ))}

                </div>
            </div>
            
        </div>
    </section>
  )
}

export default WebDev