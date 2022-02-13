import mongoose from 'mongoose'
import dotenv from 'dotenv'

// if (process.env.NODE_ENV !== "production") {
//       dotenv.config()
// }
const connectdb = () => {
    const url = process.env.MONGO_DB_CONNECTION_STRING
    const connect = mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    connect.then(db => {
        console.log("connected to db")
    }).catch(err => {
        console.log(err)
    })
}
export default connectdb