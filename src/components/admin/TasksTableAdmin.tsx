import { Task } from "../../interfaces/Task.ts";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Button from "@mui/material/Button";

interface TasksTableAdminProps {
  tasks: Task[];
  onTaskCreated: () => void;
}

const TasksTableAdmin = (props: TasksTableAdminProps) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Due date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Assigned user</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.due_date}</TableCell>
                <TableCell>{task.task_status.name}</TableCell>
                <TableCell>{task.assigned_to}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary">
                    Update assignment
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TasksTableAdmin;
