"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

import Breadcrumbs from "@/app/components/Breadcrumbs";
import FormInput from "@/app/components/FormInput.jsx";
import FormUpload from "@/app/components/FormUpload.jsx";
import { Button } from "@/app/components/Button.jsx";

const CreateCountry = () => {
  const { register, handleSubmit, reset, setValue, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Manager", href: "/manager" },
          { label: "Countries", href: "/manager/countries/" },
          { label: "Create", href: "/manager/countries/create", active: true },
        ]}
      />

      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <FormInput register={register("name")} id="country" type="text" label="Country name" name="name" placeholder="Please enter country name" />
        <FormInput register={register("shortCountryCode")} id="shortCountryCode" type="text" name="shortCountryCode" label="Couhntry short code" placeholder="Please enter country short code e.g EN" />
        <FormInput register={register("longCountryCode")} id="longCountryCode" type="text" name="longCountryCode" label="Country long code" placeholder="Please enter country long code e.g ENG" />
        {/* <Controller name="bases" control={control} render={({ field: { onChange, value, ref } }) => <Select className="mb-5" inputRef={ref} options={bases} value={bases.find((c) => c.value === value)} onChange={(val) => onChange(val.map((c) => c.value))} isMulti />} /> */}

        <FormUpload register={register("iconFlag")} icon={<ArrowUpTrayIcon className="h-8 w-8" />} setValue={setValue} watch={watch} />

        <Button type="submit" classVariation="btn btn--primary">
          Create
        </Button>
      </form>
    </>
  );
};

export default CreateCountry;
