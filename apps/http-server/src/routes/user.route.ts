import { Router } from "express";
import { singupUser } from "../controller/user.controller.ts";

const router: Router = Router();

router.post("/", singupUser);

export default router;
