import { Person, Size } from "@/protocols";
import { db } from "database/database";

async function getRandom(id: number): Promise<Person> {
  const result = await db.query<Person>(`SELECT * FROM people WHERE id=$1;`, [
    id,
  ]);
  return result[0];
}

async function getSize(): Promise<number> {
  const number = await db.query<Size>(`SELECT COUNT(*) FROM people;`);
  return number.rows[0].size;
}

const peopleRepository = { getRandom, getSize };

export default peopleRepository;
