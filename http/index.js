const express = require('express')
const routes = require('./routes/chatwood-hook')


class ServerHttp {
    port = 30003
    app;
    constructor() {
        
    }
    buildApp = () => {
        this.app = express()
        .use(express.json())
        .use(routes)
        .listen(this.port, () =>console.log(`http://localhost:${this.port}`))
    }
    start(){
        this.buildApp()
    }
}

module.exports = ServerHttp