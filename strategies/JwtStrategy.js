import passport from "passport"
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import User from '../models/user.js'

const JwtStrategyGenerator = () => {
    const opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
    opts.secretOrKey = process.env.JWT_SECRET

    // Used by the authenticated requests to deserialize the user,
    // i.e., to fetch user details from the JWT.
    passport.use(
        new JwtStrategy(opts, function (jwt_payload, done){
            User.findOne({_id: jwt_payload._id}, function(err, user){
                if(err){
                    return done(err, false)
                }
                if(user){
                    return done(null, user)
                } else {
                    return done(null, false)
                }
            })
        })
    )
}
export default JwtStrategyGenerator