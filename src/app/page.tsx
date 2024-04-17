"use client"
import React from "react";
import styles from './page.module.css'
import Container from "@/components/Container";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { PinContainer } from "@/components/ui/3d-pin";

import {FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaGitAlt  } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";



export default function Home() {
  return (
    <main>
      <Container>
      <section className=" mb-[10rem] md:h-[40rem] flex flex-col md:flex-row items-center justify-between p-10 md:p-24 border-black border-opacity-20 dark:border-white border-b dark:border-opacity-20">
        <div className="max-w-3xl p-4">
          <h1 className="text-neutral-400 max-w-lg text-md md:text-3xl mx-auto text-center my-2 font-bold">
            Hello 👋🏽 , Im Nkosinathi Mbokazi
          </h1>
          <h1 className="mb-5 relative z-10 text-4xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Full-Stack Developer
          </h1>
          <p className="mb-5 text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            From South Africa . Have a passion for creating innovative and
            user-friendly web applications that provide exceptional user
            experiences.
          </p>
          <div className="flex flex-col items-center justify-center md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <Link href='#' target="_blank" className="flex flex-row text-center justify-between px-3 py-2 md:px-8 md:py-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Download Resume
                  <span className="mt-[5px] ml-3">
                    <FiDownload />
                  </span>
                </Link>
              </button>
              <span className="relative inline-flex">
                <Link
                  href="https://www.linkedin.com/in/nkosinathimbokazi"
                  target="_blank"
                  className="ml-3 hover:text-purple-400 hover:text-accent-foreground"
                >
                  <FaLinkedin size={40} />
                </Link>
                <Link
                  href="https://github.com/d0nda"
                  target="_blank"
                  className="ml-3 hover:text-purple-400 hover:text-accent-foreground"
                >
                  <FaSquareGithub size={40} />
                </Link>
              </span>
          </div>
        </div>
        
          <BackgroundGradient className="rounded-[50%] max-w-ms p-2 sm:p-2 bg-white dark:bg-zinc-900">
            <Image
              src={`/donda-web2.png`}
              alt="donda"
              height="400"
              width="400"
              className="object-contain"
            />
          </BackgroundGradient>
        
      </section>

      <section className="mx-4 mb-8 border-black border-opacity-20 dark:border-white border-b dark:border-opacity-20">
        <div className="flex flex-col w-full items-center justify-center">
          <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Projects
          </h1>
          <p className="mb-8">skilled web developer with expertise in HTML.</p>
          <div className=" mt-3 mb-5 grid grid-cols-1 items-center justify-center md:grid-cols-2  lg:grid-cols-3 ">
            <div className="mb-[5rem] w-full flex items-center justify-center ">
              <PinContainer
                title="8thwanda.com"
                href="https://8thwanda.com"
                
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  
                  <div className="flex flex-1 w-full rounded-lg mb-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    8thwanda
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                      Customizable Tailwind CSS and Framer Motion Components.
                    </span>
                  </div>
                </div>
                
              </PinContainer>
            </div>
            <div className="mb-[5rem] w-full flex items-center justify-center ">
              <PinContainer
                title="facebook.com"
                href=""
                
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  
                  <div className="flex flex-1 w-full rounded-lg mb-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    Aceternity UI
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                      Customizable Tailwind CSS and Framer Motion Components.
                    </span>
                  </div>
                </div>
                
              </PinContainer>
            </div>
            <div className="mb-[5rem] w-full flex items-center justify-center ">
              <PinContainer
                title="facebook.com"
                href=""
                
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  
                  <div className="flex flex-1 w-full rounded-lg mb-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    Aceternity UI
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                      Customizable Tailwind CSS and Framer Motion Components.
                    </span>
                  </div>
                </div>
                
              </PinContainer>
            </div>
           
          </div>
          
       </div>
      </section>


      <section className="mb-8 border-black border-opacity-20 dark:border-white border-b dark:border-opacity-20">
        <div className="mx-4 flex flex-col h-[30rem] w-full  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-center">
          <h1 className="text-4xl sm:text-7xl font-bold z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            About Me
          </h1>
          <p>Skilled Full-Stack developer with expertise in HTML, CSS, and JavaScript. Have a passion for creating innovative and user-friendly web applications that provide exceptional user experiences. My interest in web development began during my high school years when i started experimenting with HTML and CSS. I quickly became proficient in these technologies and later expanded my skillset to include Python, which allowed me to build dynamic and interactive web applications. When iam not coding, i enjoy spending time outdoors, gaming , and listening to music.</p>
       </div>
      </section>

      <section className="mb-8">
        <div className="flex flex-col h-[90rem] md:h-[30rem] w-full  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-center">
          <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            My Skills
          </h1>
          <p className="mb-5">Technologies i use on projects.</p>
          <div className="flex flex-col md:flex-row">
            <div className="mx-2">
            <FaHtml5 className="hover:text-orange-500" size={80}/>
            <p className="text-center">Html</p>
            </div>
            <div className="mx-2">
            <FaCss3Alt className="hover:text-sky-500" size={80}/>
            <p className="text-center">Css</p>
            </div>
            <div className="mx-2">
            <SiJavascript className="hover:text-yellow-500" size={80}/>
            <p className="text-center">JavaScript</p>
            </div>
            <div className="mx-2">
            <FaReact className="hover:text-sky-300" size={80}/>
            <p className="text-center">React</p>
            </div>
            <div className="mx-2">
            <TbBrandNextjs className="hover:text-gray-500" size={80}/>
            <p className="text-center">NextJs</p>
            </div>
            <div className="mx-2">
            <FaBootstrap className="hover:text-violet-700" size={80}/>
            <p className="text-center">Bootstrap</p>
            </div>
            <div className="mx-2">
            <SiTailwindcss className="hover:text-cyan-600" size={80}/>
            <p className="text-center">Tailwind</p>
            </div>
            <div className="mx-2">
            <SiMongodb className="hover:text-green-700"  size={80}/>
            <p className="text-center">Mongodb</p>
            </div>
            <div className="mx-2">
            <SiExpress className="hover:text-gray-700" size={80}/>
            <p className="text-center">Express</p>
            </div>
            <div className="mx-2">
            <FaNodeJs className="hover:text-lime-500" size={80}/>
            <p className="text-center">NodeJs</p>
            </div>
            <div className="mx-2">
            <FaGitAlt className="hover:text-orange-700" size={80}/>
            <p className="text-center">Git</p>
            </div>
            <div className="mx-2">
            <FaGithub className="hover:text-violet-300" size={80}/>
            <p className="text-center">Github</p>
            </div>
          </div>
       </div>
      </section>
      </Container>
    </main>
  );
}
