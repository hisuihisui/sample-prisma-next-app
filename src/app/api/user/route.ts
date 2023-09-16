import { NextRequest, NextResponse } from "next/server";

// Prisma Clientのインスタンスをインポート
import prisma from "@/lib/prisma";

export async function GET() {
  const userArray = await prisma.user.findMany({
    include: {
      // true: 外部キーを設定しているテーブルの情報も一緒に持ってくる
      posts: true,
      profile: true,
    },
  });

  const res = NextResponse.json({
    headers: {
      "Content-Type": "application/json",
    },
    data: userArray,
  });

  // Response を jsonで返す
  return res;
}

export async function POST(req: NextRequest) {
  // リクエストボディ
  const { name, email, postTitle, profile } = await req.json();

  const res = await prisma.user.create({
    data: {
      name: name,
      email: email,
      // ネストすることで参照先のテーブルに書き込める
      // Postテーブルに書き込む
      posts: {
        create: { title: postTitle },
      },
      // Profileテーブルに書き込む
      profile: {
        create: { bio: profile },
      },
    },
  });

  return NextResponse.json(res);
}
