import React from 'react'
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <div id="about" className='container pt-32'>
        <h2 className='text-4xl md:text-6xl ' data-aos="zoom-in-up">About ME</h2>
        <p className='text-white pt-4 text-2xl md:text-2xl md:mt-4' data-aos="zoom-in-up">I &apos;m a passionate web developer focused on creating user-friendly, efficient, and responsive websites. I am eager to learn and grow as a developer by working on real-world projects collaborating with others to bring innovative ideas to life . My goal is to craft seamless digital experiences that not only look great but also perform flawlessly across all devices . I enjoy turning complex challenges into clean, functional code, and I &apos;m always looking for opportunities to work on meaningful projects that push my skills further.
      </p>
      <div className="flex items-start gap-4 pt-8 mt-9">
         {/* Generate Button */}
        <Link href={"https://drive.google.com/file/d/1oYL06FaEsQMTSJYqJVVFeabDM3d9Qrnl/view?usp=drive_link"} target="_blank">
         <button className="btn  w-[120px] h-[40px] lg:w-[150px] lg:h-[50px] flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 text-white font-semibold hover:bg-violet-700 transition duration-300 ease-in-out">
         <FaDownload className="hidden lg:block"/>
          
          <span className="text text-sm ">Download Cv</span>
        </button>
        </Link>
  <button className="p-3 bg-black rounded-full text-white  hover:text-purple-600 transition duration-300 text-xl">
    <a
      href="https://github.com/daraibarafiq"
      target="_blank"
      rel="noopener noreferrer"
      className='text-4xl'
    >
      <FaGithub />
    </a>
  </button>

  <button className="p-3 bg-black rounded-full text-white hover:text-purple-600 transition duration-300 text-xl">
    <a
      href="https://www.linkedin.com/in/daraiba-rafique-7b038b340"
      target="_blank"
      rel="noopener noreferrer"
      className='text-4xl'
    >
      <FaLinkedin />
    </a>
  </button>
</div>
 
    </div>
  )
}

export default About      