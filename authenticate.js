import passport from "passport"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const dev = process.env.NODE_ENV !== "production"
if(dev){
    dotenv.config()
}
export const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: !dev,
    signed: true,
    maxAge: eval(process.env.REFRESH_TOKEN_EXPIRY) * 1000,
    sameSite: "none"
}

export const getToken = user => {
    return jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: eval(process.env.SESSION_EXPIRY)
    })
}

export const getRefreshToken = user => {
    const refereshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: eval(process.env.REFRESH_TOKEN_EXPIRY)
    })
    return refereshToken
}

export const verifyUser = passport.authenticate("jwt", {session: false})