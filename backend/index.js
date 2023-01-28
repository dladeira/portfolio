const app = require('./app.js')
const mongoose = require('mongoose')

const port = 3007

async function bootstrap() {
    require('dotenv').config()

    await app.listen(port)
    console.log(`Listening on port ${port}`)
    
    await mongoose.connect(process.env.MONGODB_URI)
    console.log(`Connected to mongodb`)
}

bootstrap()