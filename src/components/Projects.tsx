'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  return (
    <div data-aos="zoom-in-up">
      <div className="pt-32 p-4 min-h-screen flex flex-col items-center">
        
        {/* Heading left aligned with margin */}
        <h1 className="text-5xl text-white mb-6 self-start ml-4">My Projects</h1>

        {/* ✅ Responsive 2x2 Grid with original gap and card size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-lg w-full" data-aos="zoom-in-up">

          {/* Card 1 */}
          <div className="bg-gray-400 rounded-lg shadow-md p-6 w-full">
            <Link href="https://vercel.com/daraiba-rafiq-s-projects/hackathon2" target="_blank">
              <Image
                src="/imageshop.jpeg"
                alt="Shop"
                width={400}
                height={300}
                className="rounded-md hover:opacity-90 transition-opacity duration-200 w-full"
              />
            </Link>
            <h2 className="text-xl text-white mt-4 font-semibold text-center">Shop</h2>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-400 rounded-lg shadow-md p-6 w-full">
            <Link href="https://blog-app-rose-seven.vercel.app/" target="_blank">
              <Image
                src="/blog-image.jpeg"
                alt="Blog Website"
                width={400}
                height={300}
                className="rounded-md hover:opacity-90 transition-opacity duration-200 w-full"
              />
            </Link>
            <h2 className="text-xl text-white mt-4 font-semibold text-center">Blog Website</h2>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-400 rounded-lg shadow-md p-6 w-full">
            <Link href="https://e-commerce-uwvz.vercel.app/" target="_blank">
              <Image
                src="/shop.png"
                alt="Figma Website"
                width={400}
                height={300}
                className="rounded-md hover:opacity-90 transition-opacity duration-200 w-full"
              />
            </Link>
            <h2 className="text-xl text-white mt-4 font-semibold text-center">Figma Website</h2>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-400 rounded-lg shadow-md p-6 w-full">
            <Link href="https://web-next-tailwind-3qzs.vercel.app/" target="_blank">
              <Image
                src="/mini.jpeg"
                alt="Mini Project"
                width={400}
                height={300}
                className="rounded-md hover:opacity-90 transition-opacity duration-200 w-full"
              />
            </Link>
            <h2 className="text-xl text-white mt-4 font-semibold text-center">Mini Project</h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
