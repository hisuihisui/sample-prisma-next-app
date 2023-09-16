export default async function UserList() {
  // APIのURL
  const url = "http://" + process.env.NEXT_PUBLIC_VERCEL_URL + "/api/user";
  // APIへリクエスト
  const res = await fetch(url, {
    cache: "no-store",
  });
  // console.log(res.json());
  // レスポンスボディを取り出す
  const data = await res.json();

  return (
    <div>
      <h2>All Users</h2>
      {data.map((user: any, index: any) => (
        <div key={index}>
          Name: {user.name} Email: {user.email} Posts:
          {user.posts.map((value: any) => `${value.title},`)} Profile:
          {user.profile?.bio}
        </div>
      ))}
    </div>
  );
}
