// Task Model (title, status, assignee, due date, priority)
import { Schema, model } from "mongoose";
import { ITask } from "../types";

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    status: {
      type: String,
      enum: ["todo", "in-progress", "done"],
      default: "todo",
    },
    assignee: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    project: { type: Schema.Types.ObjectId, ref: "Project", required: true },
  },
  {
    timestamps: true,
  }
);

const taskModel = model<ITask>("Task", taskSchema);

export default taskModel;
