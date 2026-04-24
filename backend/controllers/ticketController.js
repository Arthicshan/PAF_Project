const Ticket = require('../models/Ticket');

// CREATE a new ticket
exports.createTicket = async (req, res) => {
    try {
        const newTicket = new Ticket(req.body);
        const savedTicket = await newTicket.save();
        res.status(201).json(savedTicket);
    } catch (err) {
        res.status(500).json({ message: "Error creating ticket", error: err });
    }
};

// GET all tickets (for Admin)
exports.getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find().sort({ createdAt: -1 });
        res.status(200).json(tickets);
    } catch (err) {
        res.status(500).json({ message: "Error fetching tickets", error: err });
    }
};

// UPDATE ticket status
exports.updateTicketStatus = async (req, res) => {
    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, 
            { new: true }
        );
        res.status(200).json(updatedTicket);
    } catch (err) {
        res.status(500).json({ message: "Error updating ticket", error: err });
    }
};