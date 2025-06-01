import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="zoom-in-up">
          <h2 className="text-4xl md:text-5xl">Technologies I work with</h2>
          <p className="text-white pt-6 text-xl">
            I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I am also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on technologies to enhance my skill set and contribute effectively to projects.
          </p>

          {/* 👇 Social Icons: Below Paragraph, Left-Aligned */}
          <div className="flex gap-6 pt-8 pl-2">
            <a
              href="https://github.com/daraibarafiq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-accent"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/daraiba-rafique-7b038b340"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-accent"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">CMS:Sanity</h2>
              <h2 data-aos="zoom-in-up">Python</h2>
            </div>
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
              <h2 data-aos="zoom-in-up">Figma</h2>
              <h2 data-aos="zoom-in-up">Responsive Web Design</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
