const { checkSchema } = require("express-validator")
const EntityNotFoundError = require("../../../domain/errors/entityNotFoundError")

class EventController {
    constructor(eventService) {
        this.eventService = eventService
    }

    getEvents = async (req, res, next) => {
        try {
            const events = await this.eventService.getEvents()
            res.send(events)
        } catch (err) {
            console.error(err)
            return res.status(500).send('Some other kind of error')
        }
    }

    addEvent = async (req, res, next) => {
        try {
            const { name, description, ubication } = req.body
            const storedEvent = await this.eventService.addEvent(name, description, ubication)
            res.send(storedEvent)
        } catch (err) {           
            return res.status(500).send('Some other kind of error')
        }
    }

    addEventFunction = (req, res, next) => {
        try {
            const eventId = parseInt(req.params.eventId)
            console.debug(`eventId: ${eventId}`)
            const {date, time, capacity} = req.body
            const newEventFunction = this.eventService.addEventFunction(eventId, date, time, capacity)
            res.send(newEventFunction)

        } catch (err) {
            if(err instanceof EntityNotFoundError) {
                return res.status(404).send('No event found with the provided id')
            }
            return res.status(500).send('Some error')
        }
    }
}

module.exports = EventController