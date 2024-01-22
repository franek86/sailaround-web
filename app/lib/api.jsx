const API_URL = process.env.BASE_API_URL;

/* 
  Method: GET
  Get all Countrires 
*/
export async function fetchAllCountries() {
  const res = await fetch(`${API_URL}/countries`);
  const data = await res.json();
  return data;
}

/* 
  Method: GET
  Get all Countrires wit bases count 
*/
export async function getCountiresWithCountBases() {
  const res = await fetch(`${API_URL}/countries/countCountriesBases`, {
    next: { tags: ["countries"], revalidate: 60 },
  });
  const data = await res.json();
  return data;
}

/* Get all Bases */
export async function fetchAllBases() {
  const res = await fetch(`${API_URL}/bases`);
  const data = await res.json();
  return data;
}
