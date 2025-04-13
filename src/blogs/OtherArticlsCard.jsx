import ButtonReadMore from '../components/ButtonReadMore';

const OtherArticlsCard = ({id,title,subtitle,img}) => {
  return (
    <div className='flex flex-col md:flex-row md:gap-x-6 3xl:max-w-[921px]'>
       <div className="w-full md:w-[280px] h-[210px] mb-6 md:mb-0 ">
            <img src={img} alt={title}  className="object-cover w-full h-full"/>
       </div>
       
       <div className="flex flex-col gap-y-2 flex-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-3 md:gap-y-0 text-neutralGrey-600 p4 pointer-events-none">
                <div className="flex items-center">
                    <p>07, June, 2022</p>
                    <div className="bg-neutralGrey-600 size-2 rounded-full mx-2" />
                    <p>by Al Razi Siam</p>
                </div>
                <p className="">5 Min Read</p>
            </div>

            <h4 className="h4 font-bold text-neutralGrey-800 pointer-events-none">{title}</h4>
            <p className="p3 text-neutralGrey-700 pointer-events-none">{subtitle}</p>
            <ButtonReadMore />
       </div>



    </div>
  )
}

export default OtherArticlsCard