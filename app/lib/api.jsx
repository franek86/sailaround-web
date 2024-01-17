const API_URL = process.env.BASE_API_URL;

/* Get all Countrires */
export async function fetchAllCountries() {
  const res = await fetch(`${API_URL}/countries`);
  const data = await res.json();

  return data;
}

/* Get all Bases */
export async function fetchAllBases() {
  const res = await fetch("http://localhost:5000/api/v1/bases");
  const data = await res.json();
  return data;
}
