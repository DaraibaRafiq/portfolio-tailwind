// components/SkillsSection.jsx
"use client";
import React, { useState, useEffect } from 'react';
import {
  SiFigma,
  SiReact,
  SiRedux,
  SiJavascript,
  SiCss3,
  SiNextdotjs,
  SiHtml5,
  SiSanity,
  SiTailwindcss,
  SiGithub,
  SiTypescript,
  SiClerk,
  SiShadcnui,
  SiStripe,
  SiBootstrap
} from 'react-icons/si';

export default function Skills() {
  // 1) Track width in state (0 on server, real value in browser)
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    const update = () => setScreenWidth(window.innerWidth);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // 2) Compute radius & center purely from screenWidth
  const r = screenWidth < 640 ? 80 : screenWidth < 768 ? 120 : 200;
  const center = screenWidth < 640 ? 96 : screenWidth < 768 ? 144 : 192;

  const iconsTop = [
    SiJavascript,
    SiTypescript,
    SiReact,
    SiRedux,
    SiFigma,
    SiHtml5,
    SiCss3,
  ];

  const iconsMiddle = [
    { Icon: SiNextdotjs, angle: -30 },
    { Icon: SiTailwindcss, angle: -30 },
    { Icon: SiSanity, angle: -30 },
    { Icon: SiBootstrap, angle: -30 },
  ];

  const orbitIcons = [
    SiClerk,
    SiShadcnui,
    SiStripe,
    SiGithub,
  ];

  return (
    <div
      id="skills"
      className="max-w-screen-2xl  mx-scre mx-auto relative bg-black  lg:mt-0 flex flex-col items-center px-2 py-5 lg:py-16 "
    >
      {/* Header */}
      <h1 className="text-2xl lg:text-4xl font-semibold text-white px-2">
        I&apos;m currently Working On These{' '}
        <span className="text-purple-400">Technologies</span>
      </h1>
      <p className="mt-2 text-xs/5 lg:text-lg text-gray-300 px-2">
        HTML - CSS - JavaScript - React - Next.js - TypeScript - Redux - Figma - Tailwind CSS - Sanity CMS
      </p>

      {/* Top Icons Row */}
      <div className="flex space-x-4 lg:space-x-6 mt-12">
        {iconsTop.map((Icon, idx) => (
          <Icon key={idx} className="text-white text-2xl lg:text-4xl" />
        ))}
      </div>

      {/* Middle Icons with Connectors */}
      <div className="flex space-x-8 mt-10 relative">
        {iconsMiddle.map(({ Icon, angle }, idx) => (
          <div key={idx} className="relative w-12 h-12 flex justify-center items-center">
            <Icon className="text-white text-2xl lg:text-4xl" />
            <div
              className="absolute bg-purple-500 hidden lg:block"
              style={{
                width: '2px',
                height: '200px',
                top: '100%',
                left: '50%',
                transform: `translateX(-50%) rotate(${angle}deg)`,
                transformOrigin: 'top center',
                opacity: 0.6,
              }}
            />
          </div>
        ))}
      </div>

      {/* Orb and Orbiting Elements */}
      <div className="relative mt-16 w-[16rem] h-[16rem] lg:w-[24rem] lg:h-[24rem]">
        {/* Concentric Rings & Center */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute w-full h-full rounded-full border border-purple-600 opacity-20"></div>
          <div className="absolute w-4/5 h-4/5 rounded-full border border-purple-500 opacity-30"></div>
          <div className="absolute w-3/5 h-3/5 rounded-full border border-purple-400 opacity-40"></div>
          <div className="absolute w-full h-full bg-gradient-to-tr from-purple-700 to-purple-900 rounded-full filter blur-xl opacity-40" />
          <div className="absolute w-40 h-40 bg-gradient-to-tr from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-6xl text-white">Σ</span>
          </div>
        </div>

        {/* Orbiting Icons */}
        <div className="relative w-[200px] lg:w-96 lg:h-96 mx-auto">
          {orbitIcons.map((Icon, i) => {
            const angle = (i / orbitIcons.length) * Math.PI * 2;
            const x = r * Math.cos(angle) + center;
            const y = r * Math.sin(angle) + center;

            return (
              <div
                key={i}
                className="absolute text-white text-xl sm:text-2xl md:text-3xl"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <Icon />
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
