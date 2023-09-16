export default async function UserList() {
  // APIのURL
  const url = "http://" + process.env.NEXT_PUBLIC_VERCEL_URL + "/api/user";
  // APIへリクエスト
  const res = await fetch(url, {
    cache: "no-store",
  });
  console.log(res.body);
  // レスポンスボディを取り出す
  const { data } = await res.json();

  return (
    <div>
      <h2>All Users</h2>
      {data.map((user: any, index: any) => (
        <div key={index}>
          <span>Name: {user.name}</span>
          <span>Email: {user.email}</span>
          <span>
            Posts: {user.posts.map((value: any) => `${value.title},`)}
          </span>
          <span>Profile: {user.profile?.bio}</span>
        </div>
      ))}
    </div>
  );
}
