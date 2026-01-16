const Education = require("../models/education.model");

const getAllEducation = async () => {
  const education = await Education.find().sort({ startDate: -1 });
  return education;
};

const getEducationById = async (id) => {
  const education = await Education.findById(id);
  return education;
};

const createEducation = async (body) => {
  const education = await Education.create(body);
  return education;
};

const updateEducation = async (id, body) => {
  const education = await Education.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });
  return education;
};

const deleteEducation = async (id) => {
  const education = await Education.findByIdAndDelete(id);
  return education;
};

module.exports = {
  getAllEducation,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
};
