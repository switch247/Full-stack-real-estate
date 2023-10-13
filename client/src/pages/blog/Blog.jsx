import React from "react"
import Back from "../../components/Back"

import RecentCard from "../../components/recent/RecentCard"
import "../../components//recent/recent.css"

import img from "../../assets/images/about.jpg"


const Blog = () => {
  return (
    <>
    <div className="App">

      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
      
      </div>
    </>
  )
}

export default Blog
