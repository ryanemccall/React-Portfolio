import React from "react"

export default function About() {
    return (
        <section id='about'>
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hello I'm Ryan Modrall
                    </h1>
                    <br className="hidden lg:inline-block" />
                    <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        I am a Full Stack Web Developer
                    </h2>
                    <p className="mb-8 leading-relaxed">
                        I recently graduated from Eleven Fifty Academy for Web Development on Oct. 12th, 2021. I will graduate spring '22 with an Informatics degree through Ivy Tech. I believe in work that makes a difference in people’s lives. Through my 8 years in the healthcare industry from claims to facility enrollment to provider enrollment, I have learned that work that changes lives comes in many forms. Web Development makes me feel like an artist using my skills to help users of my sites gain knowledge, have some fun, or whatever the task may be.
                    </p>
                    <div className="flex justify-center">
                        <a
                        href="#contact"
                        className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-200 hover:text-gray-600 rounded text-lg">
                            Contact Me!
                        </a>
                        <a
                        href="#projects"
                        className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
                            See My Work!
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                    className="object-cover object-center rounded-full"
                    alt="hero"
                    src="./headshot-removebg.png" //CHANGE THIS TO ME
          />
        </div>
            </div>
        </section>
    )
}