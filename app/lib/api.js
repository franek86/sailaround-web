import { axiosClient } from "@/app/lib/axiosInstance.js";

/* 
  Method: GET
  Get all Countrires wit bases count 
*/
export const fetchCountiresWithCountBases = async (searchParams) => {
  try {
    const queryParams = new URLSearchParams();
    queryParams.append("page", searchParams || "");

    const res = await axiosClient.get(`/countries/countCountriesBases?${queryParams}`);
    const { data } = await res.data;
    const { pagination } = await res.data;
    return { data, pagination };
  } catch (error) {
    return error;
  }
};

export const fetchAllCountries = async() => {
  try {
    const res = await axiosClient.get('/countries');
    const {data} = await res.data;
    return {data}
  } catch (error) {
    return error
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
