// Project Model (name, members, tasks, createdBy)

import { Schema, model } from "mongoose";
import { IProject } from "../types";

const projectSchema = new Schema<IProject>(
  {
    projectName: { type: String, required: true },
    description: { type: String },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    tasks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const projectModel = model<IProject>("Project", projectSchema);
export default projectModel;
