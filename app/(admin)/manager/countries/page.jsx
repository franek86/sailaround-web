"use client";
import React from "react";
import Link from "next/link";

import Breadcrumbs from "@/app/components/Breadcrumbs.jsx";
import StackedList from "../../_admin-components/StackedList";
import Pagination from "@/app/components/Pagination";
import { IconBtn } from "@/app/components/Button";
import { PlusIcon } from "@heroicons/react/24/outline";

import { fetchCountiresWithCountBases } from "@/app/lib/api.js";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/app/components/Spinner.jsx";

const Countries = () => {
  /* const { data } = await fetchCountiresWithCountBases();
   */

  const { data, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      try {
        const res = await fetchCountiresWithCountBases();
        return res.data;
      } catch (error) {
        throw error;
      }
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className='flex items-center justify-between mb-5'>
        <Breadcrumbs
          breadcrumbs={[
            { label: "Manager", href: "/manager" },
            { label: "Countries", href: "/manager/countries", active: true },
          ]}
        />
        <Link href='countries/create'>
          <IconBtn name='Create' icon={<PlusIcon className='h-5 w-5 text-blue-400' />} />
        </Link>
      </div>
      {data.map((country) => (
        <StackedList key={country._id} countryName={country.name} shortCode={country.shortCountryCode} flagIcon={country.iconFlag} countBases={country.baseCount} id={country._id} />
      ))}
      <Pagination />
    </>
  );
};

export default Countries;
