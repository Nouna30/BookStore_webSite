'use client'
import { NavLinks } from '@/app/constants/constant'
//import ThemeToggler from '@/components/Helper/ThemeToggler'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { LuNetwork } from 'react-icons/lu';
import Image from 'next/image';
import { BiUser } from 'react-icons/bi'


type props = {
    openNav : () => void;
};


const NavBar = ({openNav}:props) => {
    /*
    mx : margin in x-axis
    */
   const [NavBg , setNavBg] = useState(false);

   useEffect ( () => {
    const handler = () => {
        if ( window.scrollY >= 90) setNavBg(true)
        if (window.scrollY < 90) setNavBg(false)
    }

    window.addEventListener('scroll' , handler);

    return () => window.removeEventListener('scroll' , handler);
   }, []);


  return (
    <div className={`transition-all duration-200 h-[10vh] z-[10000] fixed w-full bg-[#b4a49b]`} >
      <div className='flex items-center h-full justify-between w-[92%] mx-auto'> 
        <div className='flex items-center sm:space-x-20'>
            <div className='flex items-center space-x-2'>
                <div>
                    <Image src="/images/logo.jpg" alt="logo" width={45} height={45} className='rounded-full' /> {/* this lunetwork is an icon component from lucid react */}
                </div>
                <h1 className='text-cl hidden text-white font-bold sm:block md:text-3xl'>BookStore</h1>
            </div>
        </div>

        <div className='flex tems-center space-x-4'>
            <div className='hidden lg:flex items-center space-x-10'>
                {NavLinks.map( (link) => {
                    return <Link key={link.id} href={link.url} className='text-white text-lg font-medium transition-all duration-200 scale-110 hover:scale-120'>
                        <p>{link.label}</p>
                    </Link>
                })}
            </div>
            <div>
                <BiUser className="text-[30px] font-[700] text-white ml-[30px] cursor-pointer"/>
            </div>
            {/**
             <button className='px-8 py-2.5 text-xs sm:text-sm rounded-lg cursor-pointer bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-900 hover:bg-gray-300 transition-all duration-300 '>
                Rregister / Login
            </button>
             */}
            {/* Theme toggler <ThemeToggler/>*/}
            
            <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white dark:text-white lg:hidden' />
        </div>
      </div>
    </div>
  )
}

export default NavBar
