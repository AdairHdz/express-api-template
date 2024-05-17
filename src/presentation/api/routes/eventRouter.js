const express = require('express');
const logActivity = require('../middlewares/loggerMiddleware');

class EventRouter {
    constructor(eventController) {
        this.router = express.Router()
        this.eventController = eventController

        this.router.get('/', logActivity, this.eventController.getEvents)
        this.router.post('/', logActivity, this.eventController.addEvent)
        this.router.post('/:eventId/event-functions', this.eventController.addEventFunction)
    }
}

module.exports = EventRouter