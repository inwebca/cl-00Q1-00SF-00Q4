import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import CircularProgress from "@mui/material/CircularProgress";

const TaskView = () => {
  const [statuses, setStatuses] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTasks = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("id", { ascending: true });
      console.log(data);
    if (error) {
      console.error("Error:", error.message);
    } else {
      setStatuses(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    void fetchTasks();
  }, []);




  useEffect(() => {
    void fetchTasks();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return <div>test</div>;
};

export default TaskView;
