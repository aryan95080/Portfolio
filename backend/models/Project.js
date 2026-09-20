import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: [{ type: String }],
    highlights: [{ type: String }],
    liveDemoUrl: { type: String, default: "" },
    githubUrl: { type: String, default: "" },
    startDate: { type: String }, // e.g. "Mar 2024" — kept as display text, not a real Date
    endDate: { type: String },
    order: { type: Number, default: 0 }, // controls display order on the site
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
  