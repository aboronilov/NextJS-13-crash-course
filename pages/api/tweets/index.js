import { createTweet } from "@/lib/prisma/tweets";

const handler = async (req, res) => {
  res.setHeader("Allow", ["POST"]);

  if (req.method === "POST") {
    try {
      const data = req.body;
      const { newTweet, error } = await createTweet(data);
      if (error) throw new Error(error);
      return res.status(201).json({ newTweet });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
