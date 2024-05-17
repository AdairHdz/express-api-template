const Event = require("./event")
const Ubication = require("./ubication")

describe('event object', () => { 
    it('should add a function to the event correctly', () => {
        const e = new Event('Event I', 'Description', new Ubication('reccint', 'address'))
        e.addEventFunction('11-05-2024', '09:00', 10)
        expect(e.getEventFunctions().length).toBe(1)
    })
 })