// input タグのonChangeを使うためにServer Componentにする
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddUser() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [profile, setProfile] = useState("");

  // Userテーブルへデータを書き込む
  // 注意：emailが重複禁止となっている
  const fetchAsyncAddUser = async () => {
    // 入力されていないものがあれば、登録しない
    if (name == "" || email == "" || postTitle == "" || profile == "") {
      console.log("すべての項目を埋めてください");
      return;
    }

    // APIのURL
    const url = "http://" + process.env.NEXT_PUBLIC_VERCEL_URL + "/api/user";
    // リクエストパラメータ
    const params = {
      method: "POST",
      // JSON形式のデータのヘッダー
      headers: {
        "Content-Type": "application/json",
      },
      // リクエストボディ
      body: JSON.stringify({
        name: name,
        email: email,
        postTitle: postTitle,
        profile: profile,
      }),
    };

    // APIへのリクエスト
    await fetch(url, params);

    // 入力値を初期化
    setName("");
    setEmail("");
    setPostTitle("");
    setProfile("");

    // 画面をリフレッシュ
    router.refresh();
  };

  // inputタグのvalueに変化があった際に実行される
  const changeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // inputタグのvalueに変化があった際に実行される
  const changeEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // inputタグのvalueに変化があった際に実行される
  const changePostTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
  };

  // inputタグのvalueに変化があった際に実行される
  const changeProfileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile(e.target.value);
  };

  return (
    <div>
      <h2>Add User</h2>
      <div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={changeNameInput}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={changeEmailInput}
          />
        </div>
        <div>
          <label>Post Title:</label>
          <input
            type="text"
            name="postTitle"
            value={postTitle}
            onChange={changePostTitleInput}
          />
        </div>
        <div>
          <label>Profile:</label>
          <input
            type="text"
            name="profile"
            value={profile}
            onChange={changeProfileInput}
          />
        </div>
        <div>
          <button onClick={fetchAsyncAddUser}>追加</button>
        </div>
      </div>
    </div>
  );
}
