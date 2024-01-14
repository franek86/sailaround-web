const API_URL = process.env.BASE_API_URL;

export async function fetchCountries() {
  const res = await fetch(`${API_URL}/countries`);
  const data = res.json();

  return data;
}
