const Experience = require("../models/experience.model");

const getAllExperiences = async () => {
  const experiences = await Experience.find().sort({ startDate: -1 });
  return experiences;
};

const getExperienceById = async (id) => {
  const experience = await Experience.findById(id);
  return experience;
};

const createExperience = async (body) => {
  const experience = await Experience.create(body);
  return experience;
};

const updateExperience = async (id, body) => {
  const experience = await Experience.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });
  return experience;
};

const deleteExperience = async (id) => {
  const experience = await Experience.findByIdAndDelete(id);
  return experience;
};

module.exports = {
  getAllExperiences,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience,
};
