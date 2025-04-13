import { postTxt, shareSocials } from "../constants"

const PostCard = ({img,share=false}) => {
  return (
    <div>
        <div className="w-full 3xl:w-[744px] h-[400px] mb-4">
            <img src={img} alt="post image" className="object-cover w-full h-full" />
        </div>

        <div className="flex justify-end mb-8">
            <p className="p4 text-neutralGrey-700 pointer-events-none">Photo Credit : Unsplash</p>
        </div>

        <div className="flex flex-col gap-y-5 mb-5 pointer-events-none">
            {Array.from({length:2}).map((_,index)=>(
                <p key={index} className="p3 text-neutralGrey-800">{postTxt}</p>
            ))}
        </div>
        
        {share &&
        
        (
            <div className="flex justify-between md:justify-end items-center gap-x-1 mt-8">
            <p className="p4 text-[#312E47] font-medium pointer-events-none">Share with :</p>
            <div className="flex gap-x-5">
            {shareSocials.map((logo,index)=>(
                <img key={index} src={logo} alt="logo" className="size-8 cursor-pointer" />
            ))}
            </div>
        </div>
        )
        }
    </div>
  )
}

export default PostCard