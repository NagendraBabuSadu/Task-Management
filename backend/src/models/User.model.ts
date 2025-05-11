// User Model (email, password, role, projects, notifications)
import { Schema, model } from "mongoose";
import { IUser } from "../types";

const userSchema = new Schema<IUser>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: false, default: "user" },
  projects: [
    {
      projectName: {
        type: String,
        required: false,
      },
      description: {
        type: String,
        required: false,
      },
    },
  ],
  notifications: {
    type: Number,
    required: false,
    default: 0,
  },
});

const userModel = model<IUser>("User", userSchema);
export default userModel;
