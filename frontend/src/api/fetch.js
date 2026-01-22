const rawApiUrl = import.meta.env.VITE_API_BASE_URL || "";
const API_URL = rawApiUrl.replace(/\/+$/, ""); // strip trailing slashes

/* ====== HELPERS ======== */
async function handleJsonResponse(res) {
  const text = await res.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch (e) {
    // not JSON
  }

  if (!res.ok) {
    const message = json?.message || text || res.statusText;
    throw new Error(message);
  }

  return json;
}

/* ====== FETCH ========  */

// Experience
export const fetchExperiences = async () => {
  try {
    const res = await fetch(`${API_URL}/experience`);
    const json = await handleJsonResponse(res);

    const items = Array.isArray(json?.data)
      ? json.data
      : Array.isArray(json)
        ? json
        : [];
    return items.map((item) => ({
      ...item,
      type: "experience",
    }));
  } catch (err) {
    console.error("Error fetching experiences:", err);
    throw err;
  }
};

// Education
export const fetchEducations = async () => {
  try {
    const res = await fetch(`${API_URL}/education`);
    const json = await handleJsonResponse(res);

    const items = Array.isArray(json?.data)
      ? json.data
      : Array.isArray(json)
        ? json
        : [];
    return items.map((item) => ({
      ...item,
      type: "education",
    }));
  } catch (err) {
    console.error("Error fetching education:", err);
    throw err;
  }
};

// Contact Form
export const fetchContacts = async () => {
  try {
    const res = await fetch(`${API_URL}/contact`);
    const json = await handleJsonResponse(res);
    return json;
  } catch (err) {
    console.error("Error fetching contact form info:", err);
    throw err;
  }
};

/* ====== POST ========  */

// Submit Contact Form
export const submitContactForm = async (formData) => {
  try {
    const res = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const json = await handleJsonResponse(res);
    return json;
  } catch (err) {
    console.error("Error submitting contact form:", err);
    throw err;
  }
};

/* ====== PUT ========  */

/* ====== DELETE ========  */
