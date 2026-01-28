import prisma from "@repo/db/client";
import { Request, Response } from "express";

const singupUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    return res
      .status(201)
      .json({ data: user.id, message: "User created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export { singupUser };
