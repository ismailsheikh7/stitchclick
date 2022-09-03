import express from "express";
import { GetUserController } from "../Controller/Logincontroller.js";
import { PostUserController } from "../Controller/Logincontroller.js";
import passport from "passport";

const loginrouter = express.Router();

loginrouter.post("/1", PostUserController);

loginrouter.post(
  "/2",
  passport.authenticate("local", { failureMessage: true }),
  GetUserController
);
export default loginrouter;