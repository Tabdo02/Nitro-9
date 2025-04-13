import Header from "./sections/Header"
import Footer from "./sections/Footer"
import Pagination from './components/Pagination'
import {  arrowDown } from "./assets"
import { articls } from "./constants"
import ArticleCard2 from './components/ArticleCard2'

const Blog = () => {
  return (
    <>
    <Header txtColor="text-primary-600" className="bg-shades-300" />
    <section className="p-px py-10 md:py-20 lg:py-[100px] text-primary-800">
      <div className="mb-[52px]">
        <h1 className="h2-small md:h2 lg:h1 font-semibold mb-6">Blogs</h1>
        <p className="p3 md:p1">Discover the latest news, tips and user research insights from Nitro.</p>
      </div>
      
      <div className="flex flex-col gap-y-10 3xl:gap-y-[60px]">

        <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-between md:items-center">
          
          <h3 className="h3 font-semibold">All Posts</h3>
          
          <div className="flex justify-between items-center px-5 py-3 bg-primary-100 rounded-[4px] md:w-[166px] cursor-pointer">
            <h5 className="h5">Category</h5>
            <img src={arrowDown} alt="arrow down" width={24} height={24} />
          </div>

        </div>

        <div className="flex flex-col gap-y-10 3xl:gap-y-[60px]">
          
          <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-8">
              {articls.map((article)=>(
                <ArticleCard2 key={article.id} {...article} />
              ))}
          </div>
          
          <div className="hidden md:flex flex-row gap-x-8">
            {articls.map((article)=>(
                  <ArticleCard2 key={article.id} {...article} />
                ))}
          </div>

          <div className="hidden md:flex flex-row gap-x-8">
            {articls.map((article)=>(
                  <ArticleCard2 key={article.id} {...article} />
                ))}
          </div>

        </div>

        <Pagination />

      </div>

    </section>
    <Footer />
    </>
  )
}

export default Blog