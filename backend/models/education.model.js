// Import mongoose library, used to define schema and work with MongoDB
const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minLength: [6, "Title must contain at least 6 characters"],
    },
    courseProvider: {
      type: String,
      default: null,
      trim: true,
      minlength: [2, "Course provider must be at least 2 characters long"],
    },
    skills: {
      type: [String],
      validate: {
        validator: (arr) => arr.length > 0,
        message: "You must add at least one skill description",
      },
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
    },
    endDate: {
      type: Date,
      default: null,
      validate: {
        validator: function (value) {
          if (!value) return true; // null = igangværende
          return value >= this.startDate;
        },
        message: "End date cannot be before start date",
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }, // Medtager virtual fields når dokumentet sendes som JSON
    toObject: { virtuals: true }, // Medtager virtual fields når dokumentet konverteres til et JS-objekt
  }
);

educationSchema.virtual("isOngoing").get(function () {
  return this.endDate === null;
});

module.exports = mongoose.model("Education", educationSchema);
