import { Link } from 'react-router-dom';
import { wp1, wp2, wp3, wp4, XoolTech } from '../assets';
import ArrowBackward from '../assets/SVG/ArrowBackwork'
import ArrowForward from '../assets/SVG/ArrowForward';
const WorkHero = () => {
    const tags =['brand identity','Web Design'];
    const imgs =[wp1,wp2,wp3,wp4];

  return (
    <section className="p-px py-10 md:py-[100px] bg-shades-50">
     
       <div className='flex items-center gap-x-2 mb-[60px] md:mb-20'>
           <Link to="/work">
                <ArrowBackward />
           </Link>
            <p className='p3 font-medium'>Back to Work Page</p>
       </div>

       <div className='flex flex-col md:flex-row gap-y-5 md:gap-y-0 md:justify-between md:items-start'>
               
                <div className='flex flex-col gap-y-5 flex-1'>
                   
                    <h1 className='h2 md:h1 font-semibold'>
                    XoolTech
                    </h1>

                    <p className='p3 font-medium'>XoolTech ecommerce website for furniture. From building a design system to sketches then making the website responsive, here’s the whole process.</p>
                    
                    <div className='flex items-center gap-x-4'>
                        {tags.map((tag,index)=>(
                            <div key={index} className='tags'>
                                {tag}
                            </div>
                        ))}
                    </div>

                </div>
                

                <div className='flex flex-col md:items-end gap-y-3 lg:flex-1'>
                    <h3 className='h3-small font-medium'>2022</h3>
                    <div className='flex'>
                        <p className='cursor-pointer mr-2 font-medium p3'>Visit Website</p>
                        <div className='cursor-pointer'>
                        <ArrowForward />
                        </div>
                    </div>

                </div>

       </div>

       <div className='w-full h-[210px] md:h-[430px] lg:h-[800px] my-[60px] md:my-20'>
        <img src={XoolTech} alt="XoolTech" className='object-cover w-full h-full' />
       </div>

       <div className='flex flex-col gap-y-20 lg:gap-y-[100px] 3xl:gap-y-[140px]'>

                <div className='flex flex-col lg:flex-row lg:gap-x-20 3xl:gap-x-0 gap-y-10 lg:gap-y-0'>
                    <h2 className='h2-small md:h2 font-semibold flex-1'>Overview</h2>
                    <p className='p3 font-medium flex-1'>Usabiltiy waste of resources, for can we jump on a zoom, so red flag, for get in the driver's seat we just need to put these last issues to bed, so idea shower. Out of the loop have bandwidth, yet we need a recap by eod, cob or whatever comes first, feed the algorithm beef up</p>
                </div>

                <div className='flex flex-col lg:flex-row lg:gap-x-20 3xl:gap-x-0 gap-y-10 lg:gap-y-0'>
                    <h2 className='h2-small md:h2 font-semibold flex-1'>Process</h2>
                    <div className='flex-1'>
                        <div className='mb-5'>
                            <h3 className='h3-small md:h3 font-semibold mb-5'>Nam sed aspernatur non.</h3>
                            <p className='p3 font-medium'>Usabiltiy waste of resources, for can we jump on a zoom, so red flag, for get in the driver's seat we just need to put these last issues to bed, so idea shower. Out of the loop have bandwidth, yet we need a recap by eod, cob or whatever comes first, feed the algorithm beef up</p>
                        </div>
                        <div className=''>
                            <h3 className='h3-small md:h3 font-semibold mb-5'>Velit officia et voluptatibus nisi</h3>
                           <div className='flex gap-x-4'>
                            
                                <div className='w-1 h-auto bg-primary-600' />
                                
                                <div className='flex-1'>
                                    <p className='p3 font-medium mb-5'>Usabiltiy waste of resources, for can we jump on a zoom, so red flag, for get in the driver's seat we just need to put these last issues to bed, so idea shower. Out of the loop have bandwidth, yet we need a recap by eod, cob or whatever comes first, feed the algorithm beef up</p>
                                    <p className='p3 font-medium '>Usabiltiy waste of resources, for can we jump on a zoom, so red flag, for get in the driver's seat we just need to put these last issues to bed, so idea shower. Out of the loop have bandwidth, yet we need a recap by eod, cob or whatever comes first, feed the algorithm beef up</p>
                                </div>

                           </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row lg:gap-x-20 3xl:gap-x-0 gap-y-10 lg:gap-y-0'>
                    <h2 className='h2-small md:h2 font-semibold flex-1'>Goals & <br />Objectives</h2>
                    <ul className='flex-1'>
                            {Array.from({length:3}).map((_,index)=>(
                                <li key={index} className={`${index !== 2 && 'mb-5'} list-disc ml-5`}>
                                    <p className='p3 font-medium'>Usabiltiy waste of resources, for can we jump on a zoom, so red flag, for get in the driver's seat we just need to put these last issues to bed, so idea shower. Out of the loop have bandwidth, yet we need a recap by eod, cob or whatever comes first, feed the algorithm beef up</p>
                                </li>
                            ))}

                    </ul>
                </div>

                <div className='flex flex-col lg:flex-row lg:gap-x-20 3xl:gap-x-0 gap-y-10 lg:gap-y-0'>
                    <h2 className='h2-small md:h2 font-semibold flex-1'>Challenges</h2>
                    <ul className='flex-1'>
                            {Array.from({length:2}).map((_,index)=>(
                                <li key={index} className={`${index !== 1 && 'mb-5'} list-disc ml-5`}>
                                    <p className='p3 font-medium'>Usabiltiy waste of resources, for can we jump on a zoom, so red flag, for get in the driver's seat we just need to put these last issues to bed, so idea shower. Out of the loop have bandwidth, yet we need a recap by eod, cob or whatever comes first, feed the algorithm beef up</p>
                                </li>
                            ))}

                    </ul>
                </div>

                <div className='flex flex-col lg:flex-row lg:gap-x-20 3xl:gap-x-0 gap-y-10 lg:gap-y-0'>
                    <h2 className='h2-small md:h2 font-semibold flex-1'>Results</h2>
                    <div className='flex flex-col gap-y-5 flex-1'>
                        <div className='flex items-center gap-x-5'>
                            <h1 className='h3-small md:h1-small font-semibold'>120%</h1>
                            <p className='p3 md:p2 font-medium'>Increase in <br className='md:hidden' /> Conversations</p>
                        </div>
                        <div className='flex items-center gap-x-5'>
                            <h1 className='h3-small md:h1-small font-semibold'>60%</h1>
                            <p className='p3 md:p2 font-medium'>Increase in User  <br className='md:hidden' /> Engagements</p>
                        </div>
                        <div className='flex items-center gap-x-5'>
                            <h1 className='h3-small md:h1-small font-semibold'>200%</h1>
                            <p className='p3 md:p2 font-medium'>Increase in web traffic</p>
                        </div>

                    </div>
                </div>




       </div>

       <div className='flex flex-col gap-y-10 md:gap-y-20 mt-[60px] md:mt-20'>
            {imgs.map((img,index)=>(
                <div key={index} className='w-full h-[210px] md:h-[430px] lg:h-[800px]'>
                        <img src={img} alt="work post" className='w-full h-full object-cover' />
                </div>
            ))}
       </div>

    </section>
  )
}

export default WorkHero