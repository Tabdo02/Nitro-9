import { Link } from "react-router-dom"
import { arrowBackward, avatar } from "../assets"
import PostCard from "../components/PostCard"
import { allTopics, post } from "../constants"

const Post = () => {
  return (
    <section className="flex flex-col lg:flex-row 3xl:justify-center lg:gap-x-8 p-px py-10 md:py-[60px] lg:py-[100px] text-neutral-800">
        
        <div className="flex flex-col gap-y-5 mb-5 lg:mb-0">
                
                <div className="flex gap-x-3 p-4 bg-primary-50 rounded-[4px]">
                    <Link to='/blog'>
                        <img src={arrowBackward} alt="arrow backward" />
                    </Link>
                    <p className="p3 pointer-events-none">All blogs</p>
                </div>

                <div className="bg-primary-50 p-5 md:p-8 rounded-[4px]">
                    <p className="p3 font-bold text-primary-800 md:mb-7">All Topics</p>
                    
                    <ul className="md:flex flex-col gap-y-7 hidden">
                        { allTopics.map((topic,index)=>(
                                <li key={index} className="p4 text-primary-800 cursor-pointer">{topic}</li>
                        ))}
                    </ul>

                </div>
        </div>

        <div className="flex-1 3xl:max-w-[744px]">
            <h2 className="text-[#323B50] h3-small md:h2-small font-semibold pointer-events-none">Why are there so many Web3 startups?</h2>
            
            <div className="flex items-center gap-x-4 py-4 pointer-events-none">
                <img src={avatar} alt="avatar" className="size-12 3xl:size-[60px]" />
                <div>
                    <p className="text-[#312E47] p3 font-bold mb-1">Al Razi Siam</p>
                    <div className="flex gap-x-2 items-center text-[#818EB0] p4">
                        <p className="text-[#818EB0]">June 17, 2022</p>
                        <div className="size-[6px] bg-[#818EB0] rounded-full" />
                        <p>5 Min Read</p>
                    </div>
                </div>

            </div>
            
            <div className="flex flex-col gap-y-4">
            {
                    post.map((p,index)=>(
                        <PostCard  key={index} img={p} share={index === 1} />
                    ))
                }
            </div>
            
        </div>

    </section>
  )
}

export default Post