import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { cfg } from "../cfg.js";
import UserCollection from "../Models/UserModel.js";

const params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("jwt"),
};

var strategy = new Strategy(params, function (payload, done) {
  console.log(payload);
  var user = UserCollection.findById(payload.id, function (err, user) {
    if (err) {
      return done(new Error("UserNotFound"), null);
    } else if (payload.expire <= Date.now()) {
      return done(new Error("TokenExpired"), null);
    } else {
      return done(null, user);
    }
  });
});

passport.use(strategy);

export const initialize = () => {
  return passport.initialize();
};

export const authenticate = () => {
  return passport.authenticate("jwt", cfg.jwtSession);
};

