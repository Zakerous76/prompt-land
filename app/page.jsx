// import React from 'react'
// We dont need to import this in NextJS
import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text_center">
            Discover and Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient"> AI-Powered Prompt</span>
        </h1>
        <p className="desc text-center">
        PromptLand is an open-source AI tool designed for the modern world,
        enabling users to discover, create, and share imaginative prompts
        </p>
        <Feed/> 
    </section>
  )
}

export default Home