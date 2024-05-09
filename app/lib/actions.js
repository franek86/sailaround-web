import { axiosClient } from "@/app/lib/axiosInstance.js";

/* 
  Method: POST
  Create country 
*/
export const createCountry = async (data) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("shortCountryCode", data.shortCountryCode);
    formData.append("longCountryCode", data.shortCountryCode);
    formData.append("iconFlag", data.iconFlag);
    await axiosClient.post("/countries/create", formData);
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
    const response = await axiosClient.delete(`/countries/${id}`);

    if (response.status === 200) {
      const { message } = await response.data;
      
    } else {
      const errorData = await response.data;
      return { success: false, message: errorData.message };
    }
  } catch (error) {
    return { success: false, message: "Error deleting item" };
  }
};

/* 
  Method: POST
  Create base
*/
export const createBase = async(data) => {
  try {
    
    await axiosClient.post("/bases/create", data);

  } catch (error) {
    return {success: false, message:"Error creating base"}
  }
}