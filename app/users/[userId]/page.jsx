import { getUserById } from "@/lib/prisma/users";
import React from "react";
import User from "./user";

const Page = async ({ params }) => {
  const { userId } = params;
  const { user } = await getUserById(userId);
  return (
    <div>
      <User user={user} />
    </div>
  );
};

export default Page;
