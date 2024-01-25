import { axiosClient } from "@/app/lib/axiosInstance.js";

export const createCountry = async (data) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("shortCountryCode", data.shortCountryCode);
    formData.append("longCountryCode", data.shortCountryCode);
    formData.append("iconFlag", data.iconFlag);
    const response = await axiosClient.post("/countries/create", formData);
    console.log(response);
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
