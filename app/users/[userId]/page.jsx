import { getUserById, getUsers } from "@/lib/prisma/users";
import React from "react";
import User from "./user";

export async function generateStaticParams() {
  const {users} = await getUsers();

  return users.map(({id}) => ({
    userId: id
  }))
}

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
