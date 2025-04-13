import Header from './sections/Header'
import Footer from './sections/Footer'
import Post from './blogs/Post'
import OtherArticls from './blogs/OtherArticls'

const BlogPost = () => {
  return (
    <>
    <Header txtColor="text-primary-600" className="bg-shades-300"/>
    <Post />
    <OtherArticls />
    <Footer />
    </>
  )
}

export default BlogPost