import { NavLinks } from '@/app/constants/constant'
import React from 'react'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type props = {
    showNav : boolean;
    closeNav : () => void;
};



const MobileNavBar = ({closeNav , showNav}:props) => {

    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]'

  return (
    <div>
        <div className={`fixed ${navOpen} inset-0 transform transition-all right-0 duration-300 z-[100002] bg-black opacity-70 w-full h-screen`}>

        </div>

        {/* navinks */}
        <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-200 w-[80%] sm:w-[60%] bg-[#b4a49b] space-y-6 z-[1000050] right-0`}>
            {NavLinks.map( (link) => {
                return <Link key={link.id} href={link.url} >
                    <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] no-underline'>{link.label}</p>
                </Link>
            })}
            {/* CloseIcon */}
        <CgClose onClick={closeNav} className='absolute text-white cursor-pointer top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'/>
        </div>

        
    </div>
  )
}

export default MobileNavBar
