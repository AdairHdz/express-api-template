const FunctionCapacityExceededError = require('../errors/functionCapacityExceededError')
const Ticket = require('./ticket')

class EventFunction {
    constructor(date, time, capacity) {
        this.date = date;
        this.time = time;
        this.capacity = capacity;
        /** @type {Array<Ticket>} */
        this.tickets = []
    }

    validateTicket = (code) => {
        return true;
    }

    sellTickets = (buyer, numberOfTickets) => {
        if ((this.tickets.length + numberOfTickets) > this.capacity) {
            throw new FunctionCapacityExceededError('Exceeded capacity')
        }

        const tickets = []


        const p = new Purchase()
        return p
    }

    reimburseTicket = () => {

    }


}

module.exports = EventFunction