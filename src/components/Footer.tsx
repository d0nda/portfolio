"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Container from './Container';

const Footer = () => {

    return (

        <footer className="border-black border-opacity-20 dark:border-white border-t dark:border-opacity-20">
            
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center justify-between">
                    <p className="text-black dark:text-white text-md text-center sm:text-left sm:mr-auto">© 2024 Nkosinathi Mbokazi</p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 mb-3 justify-center sm:justify-start">
                        <Link href="https://facebook.com/" target="_blank" className="hover:bg-purple-400 hover:text-accent-foreground text-black dark:text-white">
                            <FaFacebook size={25} />
                        </Link>
                        <Link href="https://x.com/" target="_blank" className="ml-3 hover:bg-purple-400 hover:text-accent-foreground text-black dark:text-white">
                            <FaSquareXTwitter size={25} />
                        </Link>
                        <Link href="https://instagram.com/" target="_blank" className="ml-3 hover:bg-purple-400 hover:text-accent-foreground text-black dark:text-white">
                            <FaInstagram size={25} />
                        </Link>
                    </span>
                </div>
            


        </footer>
    )
}

export default Footer