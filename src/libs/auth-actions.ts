"use server";

import { cookies } from "next/headers";

export const setCookie = async (token: string) => {
  const cookieStore = await cookies();
  await cookieStore.set({
    name: "access_token",
    value: token,
    httpOnly: true,
  });
};

export const getCookie = async (name: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value || null;
};
