'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Breadcrumbs from '@/app/components/Breadcrumbs';
import FormInput from '@/app/components/FormInput';
import Select from 'react-select';
import Spinner from '@/app/components/Spinner';
import { Button } from '@/app/components/Button';

import { useCountries } from '@/app/lib/queries';
import { useCreateBase } from '@/app/lib/mutations';

const schema = yup.object({
    baseName: yup.string().required("Base name is required"),
    city: yup.string().required("City is required"),
    longitude: yup.number().required("Longitude is required"),
    latitude: yup.number().required("Latitude is required"),
})

const createBase = () => {
    
    const {data,isLoading} = useCountries();
    const postBaseData = useCreateBase();
    
    const {
        register,
        handleSubmit,
        formState:{errors},
        setValue,
    } = useForm({
        resolver:yupResolver(schema)
    });
    
   

    
    if (isLoading) {
        return <Spinner />;
    }
    const { data: countriesData } = data;
    
    
    const countriesOptions = countriesData.map(({_id:id, name}) => ({
        value: id,
        label: name
    }));
    
    const handleSelectChange = (option) => {
        setValue('country', option.value)
    }
     

    const onSubmit = async(data) => {
        await postBaseData.mutateAsync(data);
    }


  return (
    <>
        <Breadcrumbs
        breadcrumbs={[
          { label: "Manager", href: "/manager" },
          { label: "Bases", href: "/manager/bases/" },
          { label: "Create", href: "/manager/bases/create", active: true },
        ]}
      />

    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <FormInput register={register("baseName")} id="base" type="text" label="Base name" name="baseName" placeholder="Please enter base name" errorMessage={errors.baseName?.message} />
        <FormInput register={register("city")} id="city" type="text" name="city" label="City" placeholder="Please enter city" errorMessage={errors.city?.message} />
        <FormInput register={register("longitude")} id="longitude" type="text" name="longitude" label="Longitude" placeholder="Please enter longitude" errorMessage={errors.longitude?.message} />
        <FormInput register={register("latitude")} id="latitude" type="text" name="latitude" label="Latitude" placeholder="Please enter latitude" errorMessage={errors.latitude?.message} />
       
        <Select onChange={handleSelectChange} isSearchable={true} defaultValue={countriesOptions[0]} options={countriesOptions} name="country"></Select>
        <Button type="submit" classVariation="btn btn--primary">
            Create
        </Button>
    </form>

    
    </>
  )
}

export default createBase