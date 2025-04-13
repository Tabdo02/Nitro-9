const ServiceCard = ({id,icon,title,subtitle,w,h}) => {
  return (
    <div key={id} className="p-8 bg-primary-900">
              <div className="h-20 w-20 bg-primary-800 rounded-full flex justify-center items-center">
                <img src={icon} alt={title} height={h} width={w} className="object-contain" />
              </div>

              <div className="mt-6">
                <h3 className="h3 font-semibold mb-4 pointer-events-none">{title}</h3>
                <p className="p3 pointer-events-none">{subtitle}</p>
              </div>
    </div>
  )
}

export default ServiceCard