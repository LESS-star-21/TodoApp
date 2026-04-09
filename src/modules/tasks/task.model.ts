import { Schema, model, Document, Types } from 'mongoose';

export interface ITask extends Document {
  title:       string;
  description: string;
  completed:   boolean;
  dueDate:     Date | null;
  user:        Types.ObjectId;
}

const taskSchema = new Schema<ITask>(
  {
    title:       { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    completed:   { type: Boolean, default: false },
    dueDate:     { type: Date, default: null },
    user:        { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export const Task = model<ITask>('Task', taskSchema);