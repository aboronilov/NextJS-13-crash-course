import { getUsers, createUser } from "@/lib/prisma/users";

const handler = async (req, res) => {
  res.setHeader("Allow", ["GET", "POST", "DELETE"]);
  
  if (req.method === "GET") {
    try {
      const { users, error } = await getUsers();
      if (error) throw new Error(error);
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const data = req.body;
      const { user, error } = await createUser(data);
      if (error) throw new Error(error);
      return res.status(201).json({ user });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // этот метод наверное надо в папку с ID

  if (req.method === "DELETE") {
    try {
      const { msg, error } = await createUser(data);
      if (error) throw new Error(error);
      return res.status(201).json({ user });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
