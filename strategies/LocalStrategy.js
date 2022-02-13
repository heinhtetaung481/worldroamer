import passport from "passport"
import { Strategy } from "passport-local"
import User from '../models/user.js'

const LocalStrategyGenerator = () => {
    // Called during login/sign up
    passport.use(new Strategy(User.authenticate()))

    // Called while after loggin in / signing up to set user details in req.user
    passport.serializeUser(User.serializeUser())
}
export default LocalStrategyGenerator