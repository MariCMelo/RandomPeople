import { Person } from "@/protocols";
import peopleRepository from "@/repositories/people-repositories";

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function getRandom(): Promise<Person> {
  const number = await peopleRepository.getSize();
  const randonId = getRandomNumber(1, number);
  const randomPerson = await peopleRepository.getRandom(randonId);
  return randomPerson;
}

export const peopleService = { getRandom };
