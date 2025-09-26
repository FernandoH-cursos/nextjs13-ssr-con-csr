import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // console.log({method: request.method, url: request.url});

  return NextResponse.json({ method: request.method, count: 100 });
}

export async function POST(request: Request) {
  // console.log({ method: request.method, url: request.url });

  return NextResponse.json({ method: request.method, count: 100 });
}
