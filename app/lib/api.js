import { axiosClient } from "@/app/lib/axiosInstance.js";

/* 
  Method: GET
  Get all Countrires wit bases count 
*/
export async function fetchCountiresWithCountBases() {
  try {
    const res = await axiosClient.get("/countries/countCountriesBases");
    const data = await res.data;
    return data;
  } catch (error) {
    return error;
  }
}

/* Get all Bases */
export async function fetchAllBases() {
  try {
    const res = await axiosClient.get("/bases");
    const data = await res.data.bases;
    return data;
  } catch (error) {
    return error;
  }
}