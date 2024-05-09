"use client";
import React, { useState } from "react";
import Link from "next/link";

import Breadcrumbs from "@/app/components/Breadcrumbs.jsx";
import StackedList from "../../_admin-components/StackedList";
import Pagination from "@/app/components/Pagination";
import { IconBtn } from "@/app/components/Button";
import { PlusIcon } from "@heroicons/react/24/outline";

import Spinner from "@/app/components/Spinner.jsx";
import { useCountriesWithBases } from "@/app/lib/queries";
import { useSearchParams } from "next/navigation.js";

const Countries = () => {
  const searchParams = useSearchParams();
  const pageQueryParams = searchParams.get("page");
  const initialPageState = parseInt(pageQueryParams || 1);

  const [page, setPage] = useState(initialPageState);
  const { data, isLoading } = useCountriesWithBases(page);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (isLoading) {
    return <Spinner />;
  }
  const { data: countriesData, pagination } = data;

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
      {countriesData.map((country) => (
        <StackedList key={country._id} countryName={country.name} shortCode={country.shortCountryCode} flagIcon={country.iconFlag} countBases={country.baseCount} id={country._id} />
      ))}

      <Pagination totalPages={pagination.totalPages} currentPage={pagination.page} onPageChange={handlePageChange} />
    </>
  );
};

export default Countries;
