import Logo from "@/app/components/Logo.jsx";
import React from "react";
import NavBar from "./NavBar.jsx";
import { PowerIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <aside className='flex h-full flex-col bg-zinc-100'>
      <header className='bg-blue-500 px-3 py-10'>
        <Logo />
      </header>

      <nav className='flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        <NavBar />
        <div className='hidden h-auto w-full grow rounded-md bg-gray-50 md:block'></div>

        <form>
          <button className='flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'>
            <PowerIcon className='w-6' />
            <div className='hidden md:block'>Sign Out</div>
          </button>
        </form>
      </nav>
    </aside>
  );
};

export default Sidebar;
