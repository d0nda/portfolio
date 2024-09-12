"use client"

import React from 'react'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {

    return (

        <footer className="border-black border-opacity-30 dark:border-white border-t dark:border-opacity-30">
            
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center justify-between">
                    <p className="text-black dark:text-white text-md text-center sm:text-left sm:mr-auto">© {new Date().getFullYear()} Nkosinathi Mbokazi</p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 mb-3 justify-center sm:justify-start">
                        <Link href="https://www.linkedin.com/in/nkosinathimbokazi" target="_blank" className="hover:text-purple-400">
                            <FaLinkedin size={30} />
                        </Link>
                        <Link href="https://github.com/d0nda" target="_blank" className="ml-3 hover:text-purple-400">
                            <FaSquareGithub size={30} />
                        </Link>
                    </span>
                </div>
            


        </footer>
    )
}

export default Footer