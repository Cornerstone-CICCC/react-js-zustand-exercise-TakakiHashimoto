import { useState } from "react";
import { useUserStore } from "../store/user.store";

function UserForm() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobbies, setHobbies] = useState<string[]>([]);

  const addUser = useUserStore((state) => state.addUser);

  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    // if the check is checked, add it to the hobby list
    e.target.checked
      ? setHobbies((prev) => [...prev, e.target.name])
      : setHobbies((prev) => prev.filter((hobby) => hobby !== e.target.name));
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = { firstname, lastname, age, hobbies };
    addUser(data);
    resetInputs();
  }

  function resetInputs() {
    setFirstname("");
    setLastName("");
    setAge(0);
    setHobbies([]);
  }

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="firstname"
        />
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="lastname"
        />
        <input
          type="number"
          onChange={(e) => setAge(Number(e.target.value))}
          placeholder="age"
        />
        <label htmlFor="baseball">Baseball</label>
        <input
          id="baseball"
          type="checkbox"
          name="baseball"
          checked={hobbies.includes("baseball")}
          onChange={handleCheckbox}
        />

        <label htmlFor="soccer">Soccer</label>
        <input
          id="soccer"
          type="checkbox"
          name="soccer"
          checked={hobbies.includes("soccer")}
          onChange={handleCheckbox}
        />
        <label htmlFor="tea_making">Tea making</label>
        <input
          id="tea_making"
          type="checkbox"
          name="tea making"
          checked={hobbies.includes("tea making")}
          onChange={handleCheckbox}
        />
        <label htmlFor="cafe_study">Cafe Study</label>
        <input
          id="cafe_study"
          type="checkbox"
          name="cafe study"
          checked={hobbies.includes("cafe study")}
          onChange={handleCheckbox}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
