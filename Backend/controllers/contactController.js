const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Contact saved" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createContact };
