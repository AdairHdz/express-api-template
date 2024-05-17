const Event = require("../../business_objects/event")
const EventFunction = require("../../business_objects/eventFunction")
const Ubication = require("../../business_objects/ubication")

class EventService {

    constructor(eventRepository) {
        this.eventRepository = eventRepository
    }

    getSoldTickets = (eventId) => {
        const e = this.eventRepository.findById(eventId)
        this.getFunctions
    }

    addEvent = async (name, description, ubication) => {
        const u = new Ubication(ubication.recint, ubication.address)
        const e = new Event(name, description, u)
        const addedEvent = await this.eventRepository.storeEvent(e)        
        return addedEvent
    }    

    addEventFunction = (eventId, date, time, capacity) => {        
        const e = this.eventRepository.findById(eventId)
        console.debug(e)
        e.addEventFunction(date, time, capacity)
        return this.eventRepository.storeEvent(e)
    }

    getEvents = async () => {
        const events = await this.eventRepository.findAll()
        return events
    }

    getFunctions = (eventId) => {

    }


}

module.exports = EventService