"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

import Breadcrumbs from "@/app/components/Breadcrumbs";
import FormInput from "@/app/components/FormInput.jsx";
import FormUpload from "@/app/components/FormUpload.jsx";
import { Button } from "@/app/components/Button.jsx";
import { fetchAllBases } from "@/app/lib/api";

const CreateCountry = () => {
  const [bases, setBases] = useState([]);

  const { control, register, handleSubmit, reset, setValue, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    const fetchBases = async () => {
      try {
        const { bases } = await fetchAllBases();
        const customValueOptions = bases.map((item) => ({
          value: item._id,
          label: item.baseName,
        }));

        setBases(customValueOptions);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBases();
  }, []);

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
        <Controller name="bases" control={control} render={({ field: { onChange, value, ref } }) => <Select className="mb-5" inputRef={ref} options={bases} value={bases.find((c) => c.value === value)} onChange={(val) => onChange(val.map((c) => c.value))} isMulti />} />
        <FormUpload register={register("iconFlag")} icon={<ArrowUpTrayIcon className="h-8 w-8" />} setValue={setValue} watch={watch} />

        <Button type="submit" classVariation="btn btn--primary">
          Create
        </Button>
      </form>
    </>
  );
};

export default CreateCountry;
