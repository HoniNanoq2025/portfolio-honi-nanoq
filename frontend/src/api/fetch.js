const API_URL = import.meta.env.VITE_API_BASE_URL;

/* ====== FETCH ========  */

// Experience
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

// Education
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

// Contact Form
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

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to send message");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error submitting contact form:", err);
    throw err;
  }
};

/* ====== PUT ========  */

/* ====== DELETE ========  */
