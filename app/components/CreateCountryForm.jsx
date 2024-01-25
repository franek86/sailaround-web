"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";

import FormInput from "@/app/components/FormInput";
import FormUpload from "@/app/components/FormUpload";
import { Button } from "./Button";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { createCountry } from "../lib/actions.js";
import { axiosClient } from "../lib/axiosInstance.js";

const schema = yup.object({
  name: yup.string().required("Country name is required"),
  shortCountryCode: yup.string().required("Short country code si required"),
  longCountryCode: yup.string().required("Long country code si required"),
});

const CreateCountryForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await createCountry(data);

    /* try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("shortCountryCode", data.shortCountryCode);
      formData.append("longCountryCode", data.shortCountryCode);
      formData.append("iconFlag", data.iconFlag);

      const response = await axiosClient.post("/countries/create", formData);

      if (response.status === 200) {
        const { message } = await response.data;
        toast.success(message, { duration: 5000 });
        router.push("/manager/countries");
      } else {
        const errorData = await response.data;
        const errorMessage = errorData.message || "An error occurred.";
        toast.error(errorMessage, { duration: 2000 });
      }
    } catch (error) {
      console.log(error);
    } */
  };

  return (
    <form className='mt-6' onSubmit={handleSubmit(onSubmit)}>
      <FormInput register={register("name")} id='country' type='text' label='Country name' name='name' placeholder='Please enter country name' errorMessage={errors.name?.message} />
      <FormInput
        register={register("shortCountryCode")}
        id='shortCountryCode'
        type='text'
        name='shortCountryCode'
        label='Couhntry short code'
        placeholder='Please enter country short code e.g EN'
        errorMessage={errors.shortCountryCode?.message}
      />
      <FormInput
        register={register("longCountryCode")}
        id='longCountryCode'
        type='text'
        name='longCountryCode'
        label='Country long code'
        placeholder='Please enter country long code e.g ENG'
        errorMessage={errors.longCountryCode?.message}
      />

      {/* <Controller name="bases" control={control} render={({ field: { onChange, value, ref } }) => <Select className="mb-5" inputRef={ref} options={bases} value={bases.find((c) => c.value === value)} onChange={(val) => onChange(val.map((c) => c.value))} isMulti />} /> */}
      <FormUpload register={register("iconFlag")} name='iconFlag' id='iconFlag' icon={<ArrowUpTrayIcon className='h-8 w-8' />} setValue={setValue} watch={watch} />

      <Button type='submit' classVariation='btn btn--primary'>
        Create
      </Button>
    </form>
  );
};

export default CreateCountryForm;