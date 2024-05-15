'use client'

import useGlobalStore from '@/store/globalStore'
import Link from 'next/link'
import React from 'react'

/* TO DO: data should call from api */
const menuItems = [
    {page:"Home", url:"/"},
    {page:"Destinations", url:"/destinations"},
    {page:"Yacht", url:"/yachts"},
    {page:"Special offers", url:"/special-offers"},
    {page:"About us", url:"/about-us"},
    {page:"Contact", url:"/contact"}
]

const MainNav = () => {

const {isMobileMenuOpen} = useGlobalStore();

const mobileMenuClass = isMobileMenuOpen 
? "fixed top-0 left-0 right-0 bottom-0 bg-cyan-600 lg:relative lg:bg-transparent" 
: "hidden lg:flex"
  return (
    <nav className={mobileMenuClass}>
       
        <ul className='flex flex-col justify-center pt-20 lg:flex-row lg:pt-0 lg:items-center'>
            {menuItems.map(({page, url}) => (
                <li key={page} className='mx-3 my-2'>
                    <Link className='uppercase text-md font-semibold lg:text-sm text-red-600 hover:text-orange-400 transition-all' href={url}>
                        {page}
                    </Link>
                </li>
            ))}
             <li>
                <Link href="/login" className="mx-3 my-2 bg-orange-400 hover:bg-red-600 text-white py-2 px-4 rounded-md cursor-pointer transition-all">Login</Link>
            </li>

        </ul>
    </nav>
  )
}

export default MainNav