import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
/* import { fetchCountries } from "@/app/lib/api.jsx"; */

import Breadcrumbs from "@/app/components/Breadcrumbs.jsx";
import StackedList from "../../_admin-components/StackedList";
import Pagination from "@/app/components/Pagination";
import { IconBtn } from "@/app/components/Button";
import Link from "next/link";

const data = [
  { _id: 1, name: "Croatia", shortFlag: "HR", longFlag: "HRV", iconFlags: "/images/flags/croatia-flag.png", bases: "22" },
  { _id: 2, name: "Italy", shortFlag: "IT", longFlag: "ITA", iconFlags: "/images/flags/croatia-flag.png", bases: "22" },
  { _id: 3, name: "Greece", shortFlag: "GR", longFlag: "GRC", iconFlags: "/images/flags/croatia-flag.png", bases: "22" },
  { _id: 4, name: "France", shortFlag: "FR", longFlag: "FRA", iconFlags: "/images/flags/croatia-flag.png", bases: "22" },
  { _id: 5, name: "Montenegro", shortFlag: "ME", longFlag: "MNE", iconFlags: "/images/flags/croatia-flag.png", bases: "22" },
  { _id: 6, name: "Turkey", shortFlag: "TR", longFlag: "TUR", iconFlags: "/images/flags/croatia-flag.png", bases: "22" },
  { _id: 7, name: "Spain", shortFlag: "ES", longFlag: "ESP", iconFlags: "/images/flags/croatia-flag.png", bases: "22" },
  { _id: 8, name: "Portugal", shortFlag: "PT", longFlag: "PRT", iconFlags: "/images/flags/croatia-flag.png", bases: "22" },
];

const Countries = async () => {
  //const { data } = await fetchCountries();

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Manager", href: "/manager" },
            { label: "Countries", href: "/manager/countries", active: true },
          ]}
        />
        <Link href="countries/create">
          <IconBtn name="Create" icon={<PlusIcon className="h-5 w-5 text-blue-400" />} />
        </Link>
      </div>
      {data.map((country) => (
        <StackedList key={country._id} countryName={country.name} twoLetterCode={country.shortFlag} flagIcon={country.iconFlags} countBases={country.bases} />
      ))}

      <Pagination />
    </>
  );
};

export default Countries;
