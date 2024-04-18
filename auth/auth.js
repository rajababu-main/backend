const passport=require('passport')
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const User=require('./../collection/users')
const key=process.env.JWT_SECRET
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key;
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({_id: jwt_payload.id}).then((user)=>{
        console.log("$$$$$$$$$$$$",user)
        return done(null, user);

    }).catch((err)=>{
        return done(err, false);
    })
}));

module.exports=passport.authenticate('jwt',{session:false})