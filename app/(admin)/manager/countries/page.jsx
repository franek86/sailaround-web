import Breadcrumbs from "@/app/components/Breadcrumbs.jsx";
import { fetchCountries } from "@/app/lib/api.jsx";
import React from "react";

const Countries = async () => {
  const { data } = await fetchCountries();

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Manager", href: "/manager" },
          { label: "Countries", href: "manager/countries", active: true },
        ]}
      />
      {data.map((country) => (
        <div key={country._id}>{country.name}</div>
      ))}
    </>
  );
};

export default Countries;
