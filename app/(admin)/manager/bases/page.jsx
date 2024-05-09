import React from 'react';
import Link from "next/link";
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { IconBtn } from "@/app/components/Button";
import { PlusIcon } from "@heroicons/react/24/outline";

const Bases = () => {
  return (
    <>
        <div className='flex items-center justify-between mb-5'>
            <Breadcrumbs
            breadcrumbs={[
                { label: "Manager", href: "/manager" },
                { label: "Bases", href: "/manager/bases", active: true },
            ]}
            />
            <Link href='bases/create'>
            <IconBtn name='Create' icon={<PlusIcon className='h-5 w-5 text-blue-400' />} />
            </Link>
        </div>
    </>
  )
}


export default Bases;