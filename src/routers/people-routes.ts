import { peopleController } from "@/controllers/people-controllers";
import { Router } from "express";

const peopleRouter = Router();

peopleRouter.get("/person", peopleController.getRandom);

export default peopleRouter;
