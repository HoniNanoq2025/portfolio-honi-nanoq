const API_URL = import.meta.env.VITE_API_BASE_URL;

/* ====== FETCH ========  */

export const fetchExperience = async () => {
  try {
    const res = await fetch(`${API_URL}/experience`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching experiences:", err);
    throw err;
  }
};

export const fetchEducation = async () => {
  try {
    const res = await fetch(`${API_URL}/education`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching education:", err);
    throw err;
  }
};

export const fetchContact = async () => {
  try {
    const res = await fetch(`${API_URL}/contact`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching contact form info:", err);
    throw err;
  }
};

/* ====== POST ========  */

/* ====== PUT ========  */

/* ====== DELETE ========  */
