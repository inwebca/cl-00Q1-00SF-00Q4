import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Button from "@mui/material/Button";
import { Task } from "../../interfaces/Task.ts";
import { useState } from "react";
import TaskStatusEditDialog from "./TaskStatusEditDialog.tsx";

interface TasksTableProps {
  tasks: Task[];
  onTaskUpdated: () => void;
}

const TasksTable = (props: TasksTableProps) => {
  const [editTaskDialogOpen, setEditTaskDialogOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const handleEditClick = (task: Task) => {
    setCurrentTask(task);
    setEditTaskDialogOpen(true);
  };

  const handleDialogClose = () => {
    setEditTaskDialogOpen(false);
    setCurrentTask(null);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEditClick(task)}
                  >
                    Edit status
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {currentTask && (
        <TaskStatusEditDialog
          open={editTaskDialogOpen}
          onClose={handleDialogClose}
          onTaskSaved={props.onTaskUpdated}
          task={currentTask}
        />
      )}
    </>
  );
};

export default TasksTable;
