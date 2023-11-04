import { peopleService } from "@/services/people-services";
import { Request, Response } from "express";

async function getRandom(req: Request, res: Response) {
  const person = await peopleService.getRandom();
  console.log (person)
  res.send(person);
}

export const peopleController = { getRandom };
