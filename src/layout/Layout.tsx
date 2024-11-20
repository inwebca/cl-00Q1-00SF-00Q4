import { useAuth } from "../context/AuthContext";
import { supabase } from "../utils/supabase";
import LoggedLayout from "./LoggedLayout";
import LoggedOutLayout from "./LoggedOutLayout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { session } = useAuth();

  if (!session) {
    return <LoggedOutLayout />;
  }

  return <LoggedLayout onSignOut={() => supabase.auth.signOut()} children={children}/>;
};

export default Layout;
