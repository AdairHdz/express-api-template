const Event = require("../../../../../domain/business_objects/event")
const EntityNotFoundError = require("../../../../../domain/errors/entityNotFoundError")

class InMemoryEventRepository {
    constructor() {
        /** @type {Array<Event>} */
        this.events = []
    }
    
    /** @type {Event} */
    storeEvent = (event) => {        
        if(event.id) {
            const indexOfEventToBeUpdated = this.events.findIndex(e => e.id === event.id)
            if(indexOfEventToBeUpdated === -1) {
                throw Error('couldnt find event by id')
            }

            this.events[indexOfEventToBeUpdated] = event;
            return event
        }

        event.id = this.events.length + 1
        this.events.push(event)
        return event
    }

    findById = (eventId) => {
        console.debug(`id of event to be retrieved: ${eventId}`)
        console.debug(this.events)
        const e = this.events.find(e => e.id === eventId)
        console.debug(`event found: ${e}`)
        if(!e) {
            throw new EntityNotFoundError('No event with the provided id')
        }
        return e
    }

    findAll = () => {
        return [...this.events]
    }
}

module.exports = InMemoryEventRepository