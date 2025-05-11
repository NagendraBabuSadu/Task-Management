// Notification Model (user, message, read status)
import { Schema, model } from "mongoose";
import { INotifications } from "../types";

const notificationsSchema = new Schema<INotifications>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    readStatus: {
      type: String,
      enum: ["read", "unRead"],
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const notificationsModel = model<INotifications>("Notification", notificationsSchema);

export default notificationsModel;
