// Run with: npm run seed
// Wipes existing projects and inserts the two portfolio projects.

import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Project from "./models/Project.js";

const projects = [
  {
    title: "Ramitra — Clothing Shopping App",
    description:
      "A full-stack e-commerce platform for browsing and buying clothes, built solo end to end — from product catalog to a secure checkout flow. 'Ramitra' stands for Refined Aesthetics with Modern Innovation & Timeless Regality in Apparel.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "bcrypt",
    ],
    highlights: [
      "Product catalog, cart, and full order flow",
      "Secure JWT + bcrypt authentication, cutting login time by 30%",
      "UI/UX refinements that lifted daily user interactions by 40%",
    ],
    liveDemoUrl: "https://ramitra-shopping.onrender.com",
    githubUrl: "https://github.com/aryan95080/Ramitra-Shopping",
    startDate: "Mar 2024",
    endDate: "May 2024",
    order: 1,
  },
  {
    title: "Pulse + Meet — Doctor Appointment App",
    description:
      "A full-stack appointment booking system for patients, doctors, and admins — each with their own dashboard — covering booking, payments, and profile management.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Cloudinary",
      "JWT",
    ],
    highlights: [
      "Role-based access control for patients, doctors, and admins",
      "Razorpay integration for secure online payments during booking",
      "Cloudinary-backed uploads and Context API for shared state",
    ],
    liveDemoUrl: "https://pulse-meet.onrender.com",
    githubUrl: "https://github.com/aryan95080/Pulse-Meet",
    startDate: "May 2024",
    endDate: "Aug 2024",
    order: 2,
  },
];

async function seed() {
  try {
    await connectDB();

    await Project.deleteMany({});
    await Project.insertMany(projects);

    console.log(`Seeded ${projects.length} projects.`);
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    await mongoose.connection.close();
  }
}

seed();