import Message from "../models/Message.js";

// POST /api/contact
async function submitMessage(req, res) {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are all required.",
      });
    }

    const saved = await Message.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      id: saved._id,
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed to save your message. Please try again.",
    });
  }
}

// GET /api/contact
async function getMessages(req, res) {
  try {
    const messages = await Message.find().sort({
      createdAt: -1,
    });

    res.json(messages);
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch messages.",
    });
  }
}

export default {
  submitMessage,
  getMessages,
};