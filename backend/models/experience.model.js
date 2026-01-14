// Import mongoose library, used to define schema and work with MongoDB
const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      minLength: [6, "Position must contain at least 6 characters"],
    },

    positionEnglish: {
      type: String,
      minLength: [6, "Position in English must contain at least 6 characters"],
    },

    employmentType: {
      type: String,
      required: [true, "Employment type is required"],
      enum: {
        values: ["Temporary", "Permanent", "Internship", "Contract"],
        message:
          "Employment type must be one of: Temporary, Permanent, Contract, Internship",
      },
    },

    company: {
      type: String,
      required: [true, "Company is required"],
      minLength: [4, "Company must contain at least 4 characters"],
    },

    team: {
      type: String,
      default: null,
    },

    city: {
      type: String,
    },

    country: {
      type: String,
    },

    tools: {
      type: [String],
    },

    tasks: {
      type: [String],
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
  return this.endDate === null;
});

module.exports = mongoose.model("Experience", experienceSchema);
