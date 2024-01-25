import React from "react";

import Breadcrumbs from "@/app/components/Breadcrumbs";
import CreateCountryForm from "@/app/components/CreateCountryForm";

const CreateCountry = () => {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Manager", href: "/manager" },
          { label: "Countries", href: "/manager/countries/" },
          { label: "Create", href: "/manager/countries/create", active: true },
        ]}
      />

      <CreateCountryForm />
    </>
  );
};

export default CreateCountry;
