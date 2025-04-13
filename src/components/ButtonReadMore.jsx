import arrowTop from '../assets/icon/arrow-button.svg'
const ButtonReadMore = () => {
  return (
    <button className="btn-read-more">
        Read More
        <img src={arrowTop} alt="arrow top" className='object-contain ml-2' width={20} height={20} />
    </button>
  )
}

export default ButtonReadMore