"use server";
import { revalidateTag } from "next/cache";
import { axiosClient } from "./axiosInstance";

const API_URL = process.env.BASE_API_URL;

export const createCountry = async (formData) => {
  try {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("shortCountryCode", formData.shortCountryCode);
    data.append("longCountryCode", formData.shortCountryCode);
    data.append("iconFlag", formData.iconFlag);
    const response = await fetch(`${API_URL}/countries/create`, { body: data });
    console.log(data);
  } catch (error) {
    return { success: false, message: "Error in create country" };
  }
};

/* 
  Method: DELETE
  Delete country by id 
*/
export const deleteCountry = async (id) => {
  try {
    const response = await fetch(`${API_URL}/countries/${id}`, {
      method: "DELETE",
    });

    if (response.status === 200) {
      const { message } = await response.json();
      console.log(message);
      revalidateTag("countries");
    } else {
      const errorData = await response.json();
      return { success: false, message: errorData.message };
    }
  } catch (error) {
    return { success: false, message: "Error deleting item" };
  }
};
