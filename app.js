const Event = require("./src/domain/business_objects/event");
const EventService = require("./src/domain/services/business/eventService");
const InMemoryEventRepository = require("./src/infrastructure/persistance/repositories/implementations/in_memory/inMemoryEventRepository");
const MongoEventRepository = require("./src/infrastructure/persistance/repositories/implementations/database/mongo/mongoEventRepository");
const EventController = require("./src/presentation/api/controllers/eventController");
const EventRouter = require("./src/presentation/api/routes/eventRouter");

const Server = require("./src/presentation/api/server");

const mongoEventRepository = new MongoEventRepository()
// const inMemoryEventRepository = new InMemoryEventRepository()
const eventService = new EventService(mongoEventRepository)
const eventController = new EventController(eventService)

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ticketera');  
}

const serv = new Server([    
    {
        path: '/events',
        router: new EventRouter(eventController).router
    }
])
serv.listenAndServe(3000)