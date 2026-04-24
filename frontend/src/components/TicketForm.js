import React, { useState } from 'react';
import axios from 'axios';

const TicketForm = () => {
    const [ticket, setTicket] = useState({
        title: '',
        description: '',
        category: 'Electrical',
        priority: 'Medium',
        contactDetails: ''
    });

    const handleChange = (e) => {
        setTicket({ ...ticket, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // This sends the data to your backend server
            const res = await axios.post('http://localhost:5000/api/tickets', ticket);
            alert("Ticket Submitted Successfully! ID: " + res.data._id);
        } catch (err) {
            console.error(err);
            alert("Error submitting ticket");
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px' }}>
            <h2>Report an Incident</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Issue Title" onChange={handleChange} required /><br/>
                <textarea name="description" placeholder="Describe the problem" onChange={handleChange} required /><br/>
                <select name="priority" onChange={handleChange}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select><br/>
                <input type="text" name="contactDetails" placeholder="Your Phone/Email" onChange={handleChange} required /><br/>
                <button type="submit">Submit Ticket</button>
            </form>
        </div>
    );
};

export default TicketForm;