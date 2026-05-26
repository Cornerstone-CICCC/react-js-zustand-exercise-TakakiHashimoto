import { useUserStore, type User } from "../store/user.store";

function UserCard({ user }: { user: User }) {
  const deleteUser = useUserStore((state) => state.deleteUser);
  return (
    <div>
      <div>
        <p>
          {user.firstname} - {user.age}
        </p>
        <p>{user.hobbies.join("|")}</p>
      </div>
      <div>
        <button onClick={() => deleteUser(user.id)}>Delete</button>
      </div>
    </div>
  );
}

export default UserCard;
