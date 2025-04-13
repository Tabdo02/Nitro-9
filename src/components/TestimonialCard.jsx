const TestimonialCard = ({id,name,info,img,comment}) => {
  return (
     <div key={id} className="bg-primary-900 p-5 flex flex-col space-y-8 min-w-full md:min-w-[calc(50%-14px)] 3xl:min-w-[30%]">
              <p className="p2 pointer-events-none">{comment}</p>
              
              <div className="flex items-center space-x-4">

                  <div>
                    <img src={img} alt={name} width={48} height={48} className="rounded-full object-cover md:hidden"/>
                  </div>

                  <div>
                    <img src={img} alt={ name} width={60} height={60} className="rounded-full object-cover hidden md:block"/>
                  </div>

                  <div className="pointer-events-none">
                    <h4 className="h5 md:h4 font-bold md:font-semibold mb-1 md:mb-2">{name}</h4>
                    <p className="p4 3xl:p3">{info}</p>
                  </div>
              </div>

    </div>
  )
}

export default TestimonialCard