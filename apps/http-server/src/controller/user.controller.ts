import prisma from "@repo/db/client";
import { Request, Response } from "express";

const signupUser = async (req: Request, res: Response) => {
    try {
      console.log(req.body)
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
      }
      console.log(email, password)

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

export { signupUser };
