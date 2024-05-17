const express = require("express")

/**
 * @typedef {Object} RouterInfo
 * @property {string} path
 * @property {any} router //TODO: Create interface for routers
 */


class Server {
    /**
     * 
     * @param {Array<RouterInfo>} routers 
     */
    constructor(routers) {
        this.app = express()
        this.app.use(express.json())

        for(const router of routers) {
            this.app.use(router.path, router.router)
        }
    }

    listenAndServe(port) {
        this.app.listen(port, () => {
            console.log(`Listening on port ${port}`)
        })
    }
}

module.exports = Server