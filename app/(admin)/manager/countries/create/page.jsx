import React from "react";
import Breadcrumbs from "@/app/components/Breadcrumbs";

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
    </>
  );
};

export default CreateCountry;
