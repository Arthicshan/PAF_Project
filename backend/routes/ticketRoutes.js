const express = require('express');
const router = express.Router();
const { createTicket, getAllTickets, updateTicketStatus } = require('../controllers/ticketController');

router.post('/', createTicket);          // Create a ticket
router.get('/', getAllTickets);         // Get all tickets
router.put('/:id', updateTicketStatus); // Update a specific ticket by ID

module.exports = router;