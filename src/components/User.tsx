import { useUserStore } from "../store/user.store";
import UserCard from "./UserCard";
import UserForm from "./UserForm";

function User() {
  const users = useUserStore((state) => state.users);

  return (
    <div>
      <h2>Users</h2>
      <UserForm />
      {users.map((u) => (
        <UserCard user={u} />
      ))}
    </div>
  );
}

export default User;
