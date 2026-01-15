// Import mongoose library, used to define schema and work with MongoDB
const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      trim: true, // Automatically trims whitespace at the beginning and end of the string
      minlength: [6, "Position must contain at least 6 characters"],
    },

    positionEnglish: {
      type: String,
      trim: true, // Automatically trims whitespace at the beginning and end of the string
      minlength: [6, "Position in English must contain at least 6 characters"],
    },

    employmentType: {
      type: String,
      trim: true, // Automatically trims whitespace at the beginning and end of the string
      required: [true, "Employment type is required"],

      enum: {
        values: ["Temporary", "Permanent", "Internship", "Contract"],
        message:
          "Employment type must be one of: Temporary, Permanent, Contract, Internship",
      },
    },

    company: {
      type: String,
      trim: true, // Automatically trims whitespace at the beginning and end of the string
      required: [true, "Company is required"],
      minlength: [4, "Company must contain at least 4 characters"],
    },

    team: {
      type: String,
      trim: true, // Automatically trims whitespace at the beginning and end of the string
      default: null,
    },

    city: {
      type: String,
      trim: true, // Automatically trims whitespace at the beginning and end of the string
      required: [true, "City is required"],
      minlength: [3, "City must contain at least 3 characters"],
    },

    country: {
      type: String,
      trim: true, // Automatically trims whitespace at the beginning and end of the string
      required: [true, "Country is required"],
      minlength: [2, "Country must contain at least 2 characters"],
    },

    tools: {
      type: [{ type: String, trim: true }],
      default: [],
      validate: {
        validator: (arr) => arr.every((t) => t.length > 0),
        message: "Tools cannot contain empty strings",
      },
    },

    tasks: {
      type: [{ type: String, trim: true }],
      required: [true, "Tasks are required"],
      validate: {
        validator: (arr) => arr.length > 0,
        message: "You must add at least one task description",
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

experienceSchema.virtual("isOngoing").get(function () {
  return !this.endDate;
});

module.exports = mongoose.model("Experience", experienceSchema);
