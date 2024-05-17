const logActivity = (req, res, next) => {
    console.log('Logging...')
    next()
}

module.exports = logActivity