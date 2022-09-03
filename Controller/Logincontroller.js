import jwt from "jsonwebtoken";
import UserCollection from "../Models/UserModel.js";

export const PostUserController = (req, res) => {
  console.log(req.body);
  UserCollection.register(
    new UserCollection({ email: req.body.email, username: req.body.username }),
    req.body.password.password,
    (err, account) => {
      if (err) {
        res.send(err);
      } else {
        res.send();
      }
    }
  );
};

export const GetUserController = (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  UserCollection.findOne({ username: username }).exec((err, user) => {
    if (err) {
      res.send(err);
    } else {
      var payload = {
        id: user.id,
        exp: Date.now() + 1000 * 60 * 60 * 24 * 7, 
      };
      var token = jwt.sign(payload, cfg.jwtSecret);
      res.json({
        status: 200,
        token: token,
      });
    }
  });
};
