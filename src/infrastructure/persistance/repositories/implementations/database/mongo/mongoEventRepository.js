const mongoose = require('mongoose');
const MongoEventDocument = require('../schemas/eventSchema')

const Event = require("../../../../../../domain/business_objects/event")
const EntityNotFoundError = require("../../../../../../domain/errors/entityNotFoundError")


class MongoEventRepository {        
    /** @param {Event} event */
    storeEvent = async (event) => {        
        const med = new MongoEventDocument({
            name: event.name,
            description: event.description
        })
        const storedEvent = await med.save()
        return storedEvent

        // if(event.id) {
        //     const indexOfEventToBeUpdated = this.events.findIndex(e => e.id === event.id)
        //     if(indexOfEventToBeUpdated === -1) {
        //         throw Error('couldnt find event by id')
        //     }

        //     this.events[indexOfEventToBeUpdated] = event;
        //     return event
        // }

        // event.id = this.events.length + 1
        // this.events.push(event)
        // return event
    }

    findById = (eventId) => {                
        // if(!e) {
        //     throw new EntityNotFoundError('No event with the provided id')
        // }
        // return e
    }

    findAll = async () => {
        const r = await MongoEventDocument.find({})
        return r
    }
}

module.exports = MongoEventRepository