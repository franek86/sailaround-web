const API_URL = process.env.BASE_API_URL;

/* Get all Countrires */
export async function fetchAllCountries() {
  const res = await fetch(`${API_URL}/countries`);
  const data = await res.json();
  return data;
}

/* Get all Countrires wit bases count */
export async function getCountiresWithCountBases() {
  const res = await fetch(`${API_URL}/countries/countCountriesBases`);
  const data = await res.json();
  return data;
}

/* Get all Bases */
export async function fetchAllBases() {
  const res = await fetch(`${API_URL}/bases`);
  const data = await res.json();
  return data;
}
