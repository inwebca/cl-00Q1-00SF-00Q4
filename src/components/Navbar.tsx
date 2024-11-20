import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { supabase } from "../utils/supabase";

const Navbar = () => {

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          App
        </Typography>
        <Button onClick={handleSignOut} color="inherit">Sign out</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
