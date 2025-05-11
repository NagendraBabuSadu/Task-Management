import { Request, Response, NextFunction } from "express";
import { registerUserValidation } from "../validators/auth.validators";
import userModel from "../models/User.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const createPayload = req.body;
    const parsedPayload = registerUserValidation.safeParse(createPayload);
    console.log("Hi");
    if (!parsedPayload.success) {
      return res.status(401).json({
        msg: "You sent wrong inputs",
      });
    }

    const existingUser = await userModel.findOne({
      email: createPayload.email,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(createPayload.password, 10);

    const newUser = await userModel.create({
      email: createPayload.email,
      password: hashedPassword,
    });

    res.status(200).json({
      msg: "User created successfully.",
      email: newUser.email,
      password: hashedPassword,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error)
      res.status(500).json({ msg: "Error finding user", error: error.message });
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    console.log("hihih")
    const loginPayload = req.body;
    const parsedPayload = registerUserValidation.safeParse(loginPayload);
    if (!parsedPayload.success) {
      return res.status(401).json({
        msg: "You sent wrong inputs",
      });
    }

    const existingUser = await userModel
      .findOne({ email: loginPayload.email })
      .select("+password");

    if (!existingUser) {
      return res.status(400).json({ message: "User not found." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      loginPayload.password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(201).json({
        message: "Invalid Credentials.",
      });
    }
    const token = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
        password: existingUser.password,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      Token: token,
      message: "Login successful",
      useremail: existingUser.email,
    });
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ msg: "Error finding user", error: error.message });
  }
};

export const logoutUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const refreshTokenUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
export const googleAuthUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
