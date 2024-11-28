import { TaskStatus } from "./TaskStatus";

export interface Task {
  id: number;
  title: string;
  description: string | null;
  status_id: number;
  assigned_to: string | null;
  created_by: string;
  created_at: string;
  due_date: string | null;
  task_status: TaskStatus;
}
