import { axiosClient } from "@/app/lib/axiosInstance.js";

/* 
  Method: GET
  Get all Countrires wit bases count 
*/
export const fetchCountiresWithCountBases = async () => {
  try {
    const res = await axiosClient.get("/countries/countCountriesBases");
    const { data } = await res.data;
    const { pagination } = await res.data;
    return { data, pagination };
  } catch (error) {
    return error;
  }
};

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
