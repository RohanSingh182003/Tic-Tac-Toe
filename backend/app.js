const express = require('express')
const app = express()
const cors = require('cors')
const userRoutes = require('./src/routes/userRoutes');
const { default: mongoose } = require( 'mongoose' );

//global variables
const PORT = process.env.PORT || 4000;
const MongoURI = process.env.MongoURI || "mongodb://127.0.0.1:27017/tictacto"

//middlewares
mongoose.set('strictQuery', true);
app.use(express.json())
app.use(cors())

// connect database
mongoose.connect(MongoURI,()=> console.log('DB connected!'))

// listen server
app.listen(PORT, console.log(`alive on port ${PORT}`))

// api endpoints
app.use('/api/users',userRoutes)