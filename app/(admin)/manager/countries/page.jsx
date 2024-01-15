import React from "react";
/* import { fetchCountries } from "@/app/lib/api.jsx"; */

import Breadcrumbs from "@/app/components/Breadcrumbs.jsx";
import StackedList from "../../_admin-components/StackedList";
import Pagination from "@/app/components/Pagination";

const data = [
  { _id: 1, name: "Croatia", shortFlag: "HR", longFlag: "HRV", iconFlags: "/images/flags/croatia-flag.png" },
  { _id: 2, name: "Italy", shortFlag: "IT", longFlag: "ITA", iconFlags: "/images/flags/croatia-flag.png" },
  { _id: 3, name: "Greece", shortFlag: "GR", longFlag: "GRC", iconFlags: "/images/flags/croatia-flag.png" },
  { _id: 4, name: "France", shortFlag: "FR", longFlag: "FRA", iconFlags: "/images/flags/croatia-flag.png" },
  { _id: 5, name: "Montenegro", shortFlag: "ME", longFlag: "MNE", iconFlags: "/images/flags/croatia-flag.png" },
  { _id: 6, name: "Turkey", shortFlag: "TR", longFlag: "TUR", iconFlags: "/images/flags/croatia-flag.png" },
  { _id: 7, name: "Spain", shortFlag: "ES", longFlag: "ESP", iconFlags: "/images/flags/croatia-flag.png" },
  { _id: 8, name: "Portugal", shortFlag: "PT", longFlag: "PRT", iconFlags: "/images/flags/croatia-flag.png" },
];

const Countries = async () => {
  //const { data } = await fetchCountries();

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Manager", href: "/manager" },
          { label: "Countries", href: "/manager/countries", active: true },
        ]}
      />

      {data.map((country) => (
        <StackedList key={country._id} countryName={country.name} twoLetterCode={country.shortFlag} flagIcon={country.iconFlags} />
      ))}

      <Pagination />
    </>
  );
};

export default Countries;
