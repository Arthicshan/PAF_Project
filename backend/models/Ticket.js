const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true }, // e.g., Electrical, Plumbing, Software
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
    status: { 
        type: String, 
        enum: ['OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED', 'REJECTED'], 
        default: 'OPEN' 
    },
    contactDetails: { type: String, required: true },
    images: [{ type: String }], // Array of image URLs
    adminNotes: { type: String },
    assignedTo: { type: String },
}, { timestamps: true }); // Automatically adds 'createdAt' and 'updatedAt'

module.exports = mongoose.model('Ticket', TicketSchema);