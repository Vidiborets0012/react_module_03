import { useEffect, useState } from "react";
import axios from "axios";

interface Character {
  name: string;
  height: number;
}

export default function AppEffects() {
  const [count, setCount] = useState(1);
  const [person, setPerson] = useState<Character | null>(null);

  // console.log("App rendred!");

  // axios
  //   .get("https://swapi.info/api/people/1")
  //   .then((response) => setPerson(response.data));

  // //ЗАЛЕЖНОСТІ ЕФЕКТА
  // useEffect(() => {
  //   console.log("Effect ran!");

  //   axios
  //     .get(`https://swapi.info/api/people/${count}`)
  //     .then((response) => setPerson(response.data));
  // }, [count]);

  // console.log("App rendred!");

  //Синтаксис async/await
  useEffect(() => {
    // 1. Оголошуємо асинхронну функцію
    async function fetchCharacter() {
      const response = await axios.get(
        `https://swapi.info/api/people/${count}`
      );
      setPerson(response.data);
    }

    // 2. Викликаємо її одразу після оголошення
    fetchCharacter();
  }, [count]);

  return (
    <>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>Get next character</button>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
}
