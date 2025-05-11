import { Document, Schema } from "mongoose"

export interface Project {
    projectName: string,
    description?: string
}

export interface IUser extends Document {
    email: string,
    password: string,
    role?: string,
    projects?: Project[],
    notifications?: number
}


export interface ITask {
    title: string,
    description?: string,
    status: "todo" | "in-progress" | "done",
    assignee: Schema.Types.ObjectId,
    dueDate?: Date,
    priority: "low" | "medium" | "high",
    project: Schema.Types.ObjectId,
    createdBy: Schema.Types.ObjectId
}



export interface IProject extends Project, Document {
    createdBy: Schema.Types.ObjectId,
    tasks: ITask[],
    members: Schema.Types.ObjectId[];
}

export interface INotifications {
    message: string, 
    user: Schema.Types.ObjectId; 
    readStatus: "read" | "unRead"
}