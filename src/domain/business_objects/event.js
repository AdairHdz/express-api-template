const EventFunction = require("./eventFunction");
const Ubication = require("./ubication");

class Event {
    id;
    /**
     * 
     * @param {string} name 
     * @param {string} description 
     * @param {Ubication} ubication 
     */
    constructor(name, description, ubication) {        
        this.name = name;        
        this.description = description;
        this.ubication = ubication;
        /** @type {Array<EventFunction>} */
        this.eventFunctions = []        
    }

    getSoldTicketsInTotal = () => {

    }
    
    getTicketsSoldForSpecificFunction = (date, time) => {
        const f = this.eventFunctions.find(e => e.date === date && e.time === time)        
    }

    addEventFunction(date, time, capacity) {
        const f = new EventFunction(date, time, capacity)
        this.eventFunctions.push(f)        
    }    

    getEventFunctions = () => {
        return [...this.eventFunctions];
    }
}

module.exports = Event