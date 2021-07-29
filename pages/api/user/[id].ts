import { NextApiRequest, NextApiResponse } from "next";

export type User = {
  id: number;
  name: string;
};

const users: User[] = [
  {
    id: 1,
    name: "Alice",
  },
  {
    id: 2,
    name: "Bob",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return res.status(404).end("not found");
  }

  res.status(200).json(user);
}
