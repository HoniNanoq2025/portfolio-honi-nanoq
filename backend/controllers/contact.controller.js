import dbConnect from "../db/db.js";
import Contact from "../models/contact.model.js";

export const addContact = async (body) => {
  await dbConnect(); // Sørg for at vi har forbindelse til DB
  const contact = await Contact.create(body);
  return contact;
};
