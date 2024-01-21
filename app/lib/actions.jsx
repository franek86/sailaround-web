"use server";
const API_URL = process.env.BASE_API_URL;
export async function createCountry(data) {
  try {
    const response = await fetch(`${API_URL}/countries/create`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Form submitted successfully");
    } else {
      console.error("Form submission failed");
    }
  } catch (error) {
    console.log(error);
  }
}
