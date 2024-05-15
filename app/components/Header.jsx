"use client"

import useGlobalStore from "@/store/globalStore";
import Logo from "./Logo";
import MainNav from "./MainNav";


const Header = () => {

  const {isMobileMenuOpen,toggleMobileMenu} = useGlobalStore();

  return <header className="bg-transparent py-5 overflow-hidden fixed top-0 left-0 right-0">
    <div className="flex items-center justify-between container mx-auto">
      <Logo logoTextColor="text-red-600" logoIconColor="#DC2626"/>
      <MainNav />
  
      <div className="lg:hidden z-[2] cursor-pointer" onClick={toggleMobileMenu}>
        {
          isMobileMenuOpen ?
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        

        }

      </div>
     
      
    </div>
  </header>
};

export default Header;
