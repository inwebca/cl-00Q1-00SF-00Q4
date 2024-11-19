import { useEffect, useState } from "react";
import { supabase } from "./utils/supabase";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<any>([]);
  useEffect(() => {
    async function getTodos() {
      const { data } = await supabase.from("todos").select();
      if (data && data.length > 0) {
        setTodos(data);
      }
    }

    getTodos();
  }, []);

  return <>{JSON.stringify(todos)}</>;
}

export default App;
