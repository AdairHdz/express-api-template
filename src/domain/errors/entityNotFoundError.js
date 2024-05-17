class EntityNotFoundError extends Error {
    constructor(message) {
        super(message);
    }
}

module.exports = EntityNotFoundError