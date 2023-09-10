import AddUser from "@/components/addUser";
import UserList from "@/components/userList"

export default async function Home() {
  return (
    <div>
      {/* User登録を行うコンポーネント */}
      <AddUser />
      {/* User一覧を表示するコンポーネント */}
      <UserList />
    </div>
  );
}
