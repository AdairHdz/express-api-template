class FunctionCapacityExceededError extends Error {
    constructor(message) {
        super(message)
    }
}

module.exports = FunctionCapacityExceededError