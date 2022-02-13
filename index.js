import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import passport from 'passport'
import connectdb from './utils/connectdb.js'
import JwtStrategyGenerator from './strategies/JwtStrategy.js'
import LocalStrategyGenerator from './strategies/LocalStrategy.js'
import { COOKIE_OPTIONS, getToken, getRefreshToken, verifyUser } from './authenticate.js'
import userRouter from "./routes/userRoutes.js"

if (process.env.NODE_ENV !== "production") {
    dotenv.config()
}

connectdb()
JwtStrategyGenerator()
LocalStrategyGenerator()

const app = express()

app.use(bodyParser.json())
app.use(cookieParser(process.env.COOKIE_SECRET))

//Add the client URL to the CORS policy

const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : []

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}

app.use(cors(corsOptions))
app.use(passport.initialize())

app.use("/users", userRouter)

app.get("/", function (req, res) {
    res.send({ status: "success" })
})

const server = app.listen(process.env.PORT || 8081, function () {
    const port = server.address().port
    console.log("App started at port:", port)
})