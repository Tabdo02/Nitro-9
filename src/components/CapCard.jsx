const CapCard = ({id,icon,title,list,w,h}) => {
  return (
    <div className="flex flex-col justify-start items-start space-y-8 bg-primary-50 py-10 px-6 md:p-10">
        <div className="flex justify-center items-center h-20 w-20 bg-primary-100 rounded-full">
            <img src={icon} alt={title} width={w} height={h} />
        </div>
        <div className="flex flex-col space-y-4">
            <h3 className="h3 font-semibold">{title}</h3>

            <ul className="flex flex-col space-y-3">
                    {list.map((item,index)=>(
                        <li key={index} className="p3"><p>{item}</p></li>
                    ))}
            </ul>

        </div>
        
    </div>
  )
}

export default CapCard