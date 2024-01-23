"use server";
import { revalidateTag } from "next/cache";

const API_URL = process.env.BASE_API_URL;

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
