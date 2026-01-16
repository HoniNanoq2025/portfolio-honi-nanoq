const Contact = require("../models/contact.model");

const addContact = async (body) => {
  const contact = await Contact.create(body);
  return contact;
};

const getAllContacts = async () => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  return contacts;
};

const getContactById = async (id) => {
  const contact = await Contact.findById(id);
  return contact;
};

const deleteContact = async (id) => {
  const contact = await Contact.findByIdAndDelete(id);
  return contact;
};

module.exports = {
  addContact,
  getAllContacts,
  getContactById,
  deleteContact,
};
