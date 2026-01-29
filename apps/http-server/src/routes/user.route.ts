import { Router } from "express";
import { signupUser } from "../controller/user.controller.ts";

const router: Router = Router();

router.route("/signup").post(signupUser);


export default router;
